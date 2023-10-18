import { Injectable } from '@nestjs/common';

import { AwsSesService } from '@Modules/aws/ses/aws.ses.service';
import { TemplateNamesEnum } from '@Modules/aws/ses/enums/template-names-enum';
import { UserModel } from '@Modules/users/user.model';

@Injectable()
export class MailService {
  constructor(private readonly awsSesService: AwsSesService) {}

  private readonly FROM = 'PostgresRest@gmail.com';
  private readonly NAME = 'PostgresRest';

  private getSource(
    FROM: string = this.FROM,
    NAME: string = this.NAME,
  ): string {
    return `${NAME} <${FROM}>`;
  }

  async sendUserInvitation(user: UserModel): Promise<void> {
    return this.awsSesService.sendEmail({
      Source: this.getSource(),
      Template: TemplateNamesEnum.UserInvitation,
      Destination: {
        ToAddresses: [user.email],
      },
      TemplateData: JSON.stringify({
        subject: 'USER: Invitation',
        acceptUrl:
          `${process.env.APP_PARTICIPANT_URL}/participant/verify?` +
          `token=${user.token}`,
        rejectUrl: `${process.env.APP_URL}/`,
      }),
    });
  }

  async sendUserAcceptance(user: UserModel): Promise<void> {
    return this.awsSesService.sendEmail({
      Source: this.getSource(),
      Template: TemplateNamesEnum.UserAcceptance,
      Destination: {
        ToAddresses: [user.email],
      },
      TemplateData: JSON.stringify({
        subject: 'USER: Acceptance',
        loginUrl: `${process.env.APP_PARTICIPANT_URL}/user/login`,
      }),
    });
  }

  async sendUserForgot(user: UserModel): Promise<void> {
    return this.awsSesService.sendEmail({
      Source: this.getSource(),
      Template: TemplateNamesEnum.UserReset,
      Destination: {
        ToAddresses: [user.email],
      },
      TemplateData: JSON.stringify({
        subject: `USER: Reset Password`,
        name: user.name,
        email: user.email,
        forgetUrl: `${process.env.APP_PARTICIPANT_URL}/user/reset?token=${user.token}`,
      }),
    });
  }
}
