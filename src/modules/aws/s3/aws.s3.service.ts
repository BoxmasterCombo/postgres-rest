import { Injectable, Logger } from '@nestjs/common';
import {
  DeleteObjectCommand,
  DeleteObjectCommandOutput,
  DeleteObjectsCommand,
  DeleteObjectsCommandOutput,
  S3Client,
} from '@aws-sdk/client-s3';
import { ObjectIdentifier } from '@aws-sdk/client-s3/dist-types/models/models_0';
import * as crypto from 'crypto';

import GetSignatureDto from '@Modules/aws/s3/dto/get-signature-dto';

@Injectable()
export class AwsS3Service {
  private logger = new Logger(AwsS3Service.name);
  private s3: S3Client;

  constructor() {
    this.s3 = new S3Client({
      region: process.env.AWS_BUCKET_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
  }

  async deleteFile(Key: string): Promise<DeleteObjectCommandOutput> {
    const command: DeleteObjectCommand = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key,
    });

    return this.s3.send(command);
  }

  async deleteFiles(
    keysForDelete: string[],
  ): Promise<DeleteObjectsCommandOutput> {
    const Objects: ObjectIdentifier[] = keysForDelete.map((Key) => ({ Key }));

    return this.s3.send(
      new DeleteObjectsCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Delete: { Objects },
      }),
    );
  }

  async getSignature(data: GetSignatureDto) {
    const { datetime, to_sign } = data;
    const { AWS_SECRET_KEY, AWS_BUCKET_REGION } = process.env;

    const substring = datetime.substring(0, 8);
    const dateKey = this.hmac(`AWS4${AWS_SECRET_KEY}`, substring);
    const dateRegionKey = this.hmac(dateKey, AWS_BUCKET_REGION);
    const dateRegionServiceKey = this.hmac(dateRegionKey, 's3');
    const signingKey = this.hmac(dateRegionServiceKey, 'aws4_request');

    return this.hmac(signingKey, to_sign).toString('hex');
  }

  hmac(key: string, string: string) {
    const hmacObj = crypto.createHmac('sha256', key);
    hmacObj.end(string);

    return hmacObj.read();
  }
}
