import { Injectable, Logger, NotImplementedException } from '@nestjs/common';
import {
  CreateTemplateCommand,
  CreateTemplateRequest,
  GetTemplateCommand,
  GetTemplateRequest,
  SendTemplatedEmailCommand,
  SendTemplatedEmailRequest,
  SESClient,
  UpdateTemplateCommand,
  UpdateTemplateRequest,
} from '@aws-sdk/client-ses';

import { CreateOrUpdateTemplateDto } from '@Modules/aws/ses/dto/create-or-update-template-dto';

@Injectable()
export class AwsSesService {
  private logger = new Logger(AwsSesService.name);
  private ses: SESClient;

  constructor() {
    this.ses = new SESClient({
      region: process.env.AWS_SES_REGION,
      credentials: {
        accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SES_SECRET,
      },
    });

    // Create or update SES templates
    // Promise.all([
    //   this.createOrUpdateTemplate({
    //     TemplateName: TemplateNamesEnum.PrtInvitation,
    //     SubjectPart: ParticipantInvitationSettingsDefault.subject,
    //     HtmlPart: Templates.participantInvitation,
    //   }),
    //   this.createOrUpdateTemplate({
    //     TemplateName: TemplateNamesEnum.PrtAcceptance,
    //     SubjectPart: ParticipantAcceptanceSettingsDefault.subject,
    //     HtmlPart: Templates.participantAcceptance,
    //   }),
    //   this.createOrUpdateTemplate({
    //     TemplateName: TemplateNamesEnum.PrtReset,
    //     SubjectPart: JSON.stringify('{{subject}}'),
    //     HtmlPart: Templates.participantResetTemplate,
    //   }),
    //   this.createOrUpdateTemplate({
    //     TemplateName: TemplateNamesEnum.StudyAdminInvitation,
    //     SubjectPart: JSON.stringify('{{subject}}'),
    //     HtmlPart: Templates.studyAdminInvitationTemplate,
    //   }),
    //   // --- notification templates ---
    //   this.createOrUpdateTemplate({
    //     TemplateName: TemplateNamesEnum.NewMessageNotification,
    //     SubjectPart: JSON.stringify('{{subject}}'),
    //     HtmlPart: Templates.newMessageNotificationTemplate,
    //   }),
    //   this.createOrUpdateTemplate({
    //     TemplateName: TemplateNamesEnum.NewQuestNotification,
    //     SubjectPart: JSON.stringify('{{subject}}'),
    //     HtmlPart: Templates.newQuestNotificationTemplate,
    //   }),
    //   this.createOrUpdateTemplate({
    //     TemplateName: TemplateNamesEnum.QuestSchedule,
    //     SubjectPart: JSON.stringify('{{subject}}'),
    //     HtmlPart: Templates.questScheduleTemplate,
    //   }),
    // ]);
  }

  async createOrUpdateTemplate(
    templateData: CreateOrUpdateTemplateDto,
  ): Promise<void> {
    try {
      const existingTemplate = await this.getTemplate(templateData);

      if (existingTemplate && existingTemplate.Template) {
        await this.updateTemplate(templateData);
      } else {
        await this.createTemplate(templateData);
      }
    } catch (err) {
      if (err.Error?.Code === 'TemplateDoesNotExist') {
        await this.createTemplate(templateData);
      } else {
        throw new NotImplementedException(
          `Failed to create or update SES template: ${err}`,
        );
      }
    }
  }

  async createTemplate(templateData: CreateOrUpdateTemplateDto) {
    const input: CreateTemplateRequest = { Template: templateData };
    const command = new CreateTemplateCommand(input);

    return this.ses.send(command);
  }

  async updateTemplate(templateData: CreateOrUpdateTemplateDto) {
    const input: UpdateTemplateRequest = { Template: templateData };
    const command = new UpdateTemplateCommand(input);

    return this.ses.send(command);
  }

  async getTemplate(templateData: CreateOrUpdateTemplateDto) {
    const input: GetTemplateRequest = {
      TemplateName: templateData.TemplateName,
    };
    const command = new GetTemplateCommand(input);

    return this.ses.send(command);
  }

  async sendEmail(params: SendTemplatedEmailRequest): Promise<void> {
    const command = new SendTemplatedEmailCommand(params);

    return this.ses.send(command, (err, data) => {
      if (err) {
        this.logger.fatal(err, err.stack);
      } else {
        this.logger.error(
          `Mail sent to ( ${params.Destination.ToAddresses.map(
            (e) => '<' + e + '> ',
          )})`,
        );
      }

      return data;
    });
  }
}
