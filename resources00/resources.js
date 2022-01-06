const { asset } = require('./tools');

module.exports = {
    en: {
        default: {
            termsAndConditions: '',

            smsPersanolizedNurseBookingConfirmedCA:
                'You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersanolizedNurseBookingConfirmedCAName:
                'Nurse booking confirmed',
            smsDepersonalizedNurseBookingConfirmedCA:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNurseBookingConfirmedCAName:
                'Nurse booking confirmed',
            emailPersonalizedNurseBookingConfirmedCASubject:
                'Booking was confirmed',
            emailPersonalizedNurseBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
            emailDepersonalizedNurseBookingConfirmedCASubject:
                'Booking was confirmed',
            emailDepersonalizedNurseBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            smsPersanolizedDoctorBookingConfirmedCA:
                'You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersanolizedDoctorBookingConfirmedCAName:
                'Doctor booking confirmed',
            smsDepersonalizedDoctorBookingConfirmedCA:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedDoctorBookingConfirmedCAName:
                'Doctor booking confirmed',
            emailPersonalizedDoctorBookingConfirmedCASubject:
                'Booking was confirmed',
            emailPersonalizedDoctorBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
            emailDepersonalizedDoctorBookingConfirmedCASubject:
                'Booking was confirmed',
            emailDepersonalizedDoctorBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            smsPersonalizedPatientMustConfirmBooking:
                'You have received a call from {{careunitName}} and we therefore ask you to log into our portal {{appUrl}} using BankID to confirm the visit. Please contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedPatientMustConfirmBookingName:
                'Booking confirmation required',
            smsPersonalizedBookingCanceled:
                'Your time at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}} is now canceled. Please contact {{careunitName}} if you would like to book a new appointment. For more information, please see {{marketingUrl}}.',
            smsPersonalizedBookingCanceledName: 'Booking canceled',
            smsPersonalizedBookingConfirmed:
                'You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedBookingConfirmedName: 'Booking confirmed',
            smsPersonalizedBookingReminderTomorrow:
                'We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedBookingReminderTomorrowName:
                "Tomorrow's booking reminder",
            smsPersonalizedBookingReminderToday:
                'We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedBookingReminderTodayName: "Today's booking reminder",
            smsShcNarPersonalizedBookingReminderTomorrow:
                'We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}}. It is a drop-in booking, please come between {{visitStartTime}} - {{visitEndTime}} and {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsShcNarPersonalizedBookingReminderTomorrowName:
                "Tomorrow's booking reminder",
            smsShcNarPersonalizedBookingReminderToday:
                'We would like to remind you of your booking today at {{careunitName}}. It is a drop-in booking, please come between {{visitStartTime}} - {{visitEndTime}} and {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsShcNarPersonalizedBookingReminderTodayName:
                "Today's booking reminder",

            smsPersonalizedNurseBookingReminder1CA:
                'We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedNurseBookingReminder1CAName:
                'Nurse booking reminder',
            smsPersonalizedNurseBookingReminder2CA:
                'We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedNurseBookingReminder2CAName:
                'Nurse booking reminder',
            smsPersonalizedDoctorBookingReminder1CA:
                'We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
            smsPersonalizedDoctorBookingReminder1CAName:
                'Doctor booking reminder',

            smsPersonalizedReturnNarEquipment:
                'Please log in to {{careunitName}} portal {{appUrl}} with BankID to answer a final question. We also remind you to return the equipment today. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedReturnNarEquipmentName:
                'NAR equipment returnal reminder',
            smsPersonalizedNarQuestionnaire:
                'You received a call from {{careunitName}}. Please log in to {{appUrl}} (mobile BankID required) to answer any questions. A time for visits will be sent separately. Please contact us if you are unable to login, see {{marketingUrl}}.',
            smsPersonalizedNarQuestionnaireName:
                'NAR equipment experience questionnaire',
            smsPersonalizedNarRetest:
                'You have been given time to pick up NAR equipment at {{careunitName}}. Log in here: {{appUrl}} for more information. For more information, see {{marketingUrl}}.',
            smsPersonalizedNarRetestName: 'NAR equipment pick up reminder',
            smsPersonalizedAas12Months:
                'Please log in to the {{careunitName}} portal {{appUrl}} with BankID to fill out a form. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedAas12MonthsName: 'AAS (12 months)',

            smsPersonalizedCpap1Month:
                'Please log in to the {{careunitName}} portal {{appUrl}} with BankID to fill out a form. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedCpap1MonthName: 'CPAP (1 month)',
            smsPersonalizedCpap4Months:
                'Please log in to the {{careunitName}} portal {{appUrl}} with BankID to fill out a form. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedCpap4MonthsName: 'CPAP (4 months)',
            smsPersonalizedCpap12Months:
                'Please log in to the {{careunitName}} portal {{appUrl}} with BankID to fill out a form. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsPersonalizedCpap12MonthsName: 'CPAP (12 months)',

            smsDepersonalizedPatientMustConfirmBooking:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedPatientMustConfirmBookingName:
                'Booking confirmation required',
            smsDepersonalizedBookingCanceled:
                'Your booking at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}} has been canceled. For more information, please see {{marketingUrl}}. Please log in to {{appUrl}} to confirm your mobile number to receive messages from {{careunitName}}.',
            smsDepersonalizedBookingCanceledName: 'Booking canceled',
            smsDepersonalizedBookingConfirmed:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedBookingConfirmedName: 'Booking confirmed',
            smsDepersonalizedBookingReminderTomorrow:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedBookingReminderTomorrowName:
                "Tomorrow's booking reminder",
            smsDepersonalizedBookingReminderToday:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedBookingReminderTodayName:
                "Today's booking reminder",

            smsDepersonalizedNurseBookingReminder1CA:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNurseBookingReminder1CAName:
                'Nurse booking reminder',
            smsDepersonalizedNurseBookingReminder2CA:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNurseBookingReminder2CAName:
                'Nurse booking reminder',
            smsDepersonalizedDoctorBookingReminder1CA:
                'You have received a reminder of {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedDoctorBookingReminder1CAName:
                'Doctor booking reminder',

            smsDepersonalizedReturnNarEquipment:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedReturnNarEquipmentName:
                'NAR equipment returnal reminder',
            smsDepersonalizedNarQuestionnaire:
                'You are registered with {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and fill out a form. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNarQuestionnaireName:
                'NAR equipment experience questionnaire',
            smsDepersonalizedNarRetest:
                'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
            smsDepersonalizedNarRetestName: 'NAR equipment pick up reminder',
            smsDepersonalizedAas12Months:
                'You have received a message from {{careunitName}} portal {{appUrl}}. Sign in with BankID to read the message and confirm your mobile number. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsDepersonalizedAas12MonthsName: 'AAS (12 months)',

            smsDepersonalizedCpap1Month:
                'You have received a message from {{careunitName}} portal {{appUrl}}. Sign in with BankID to read the message and confirm your mobile number. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsDepersonalizedCpap1MonthName: 'CPAP (1 month)',
            smsDepersonalizedCpap4Months:
                'You have received a message from {{careunitName}} portal {{appUrl}}. Sign in with BankID to read the message and confirm your mobile number. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsDepersonalizedCpap4MonthsName: 'CPAP (4 months)',
            smsDepersonalizedCpap12Months:
                'You have received a message from {{careunitName}} portal {{appUrl}}. Sign in with BankID to read the message and confirm your mobile number. Contact us if you are unable to login. For more information, see {{marketingUrl}}.',
            smsDepersonalizedCpap12MonthsName: 'CPAP (12 months)',

            smsVerification: 'Your verification code is {{verificationCode}}.',
            smsVerificationName: 'Phone number verification',

            emailLayout: `<mjml>
  <mj-head>
    <mj-attributes>
      <mj-class name="image" width="174px" align="center"></mj-class>
      <mj-class name="title" font-size="20px" color="black" font-family="helvetica" line-height="25px" align="center"></mj-class>
      <mj-class name="button" font-family="Helvetica" background-color="#0052CC" color="white" height="32px" width="184px" font-size="20px" border-radius="10px" align="center"></mj-class>
      <mj-class name="subtitle" color="black" font-family="helvetica" line-height="20px" align="center"></mj-class>
      <mj-class name="divider" width="100%" border-width="2px" border-color="#EBEDF1"></mj-class>
      <mj-class name="footerText" font-size="12px" color="black" font-family="helvetica" line-height="15px" align="center"></mj-class>
    </mj-attributes>
  </mj-head>
  <mj-body background-color="white">
    <mj-section>
      <mj-column width="100%">
        <mj-image mj-class="image" src="cid:ic-illustration-3.png" padding-top="24px" padding-bottom="12px"></mj-image>
        {{emailBody}}
        <mj-button mj-class="button" href="{{appUrl}}" padding="0px" padding-bottom="0px">
          Log In
        </mj-button>
        <mj-text mj-class="subtitle" padding="24px" font-size="16px">
          For more information, please see
          <a style="color:#0052CC" href="{{marketingUrl}}">
            {{marketingUrl}}
          </a>
        </mj-text>
        <mj-divider mj-class="divider" padding-top="0px" padding-bottom="24px"></mj-divider>
        <mj-text mj-class="footerText" padding-top="0px" padding-bottom="16px">Copyright © *2020* *{{tenantName}}*, All rights reserved.</mj-text>
        <mj-text mj-class="footerText" font-weight="700" padding-top="0px" padding-bottom="0px">Want to change how you receive these emails?</mj-text>
        <mj-text mj-class="footerText" padding-top="0px" padding-bottom="16px">You can
          <a style="color:#0052CC" href="{{appUrl}}">
            update your preferences
          </a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,

            emailPersonalizedPatientMustConfirmBookingSubject:
                'Waiting for booking confirmation',
            emailPersonalizedPatientMustConfirmBookingBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a call from {{careunitName}} and we therefore ask you to log into our portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> using BankID to confirm the visit. Please contact us if you are unable to login.</mj-text>',

            emailPersonalizedBookingCanceledSubject: 'Booking was canceled',
            emailPersonalizedBookingCanceledBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Your time at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}} is now canceled. Please contact {{careunitName}} if you would like to book a new appointment.</mj-text>',

            emailPersonalizedBookingConfirmedSubject: 'Booking was confirmed',
            emailPersonalizedBookingConfirmedBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedBookingReminderTomorrowSubject: "Tomorrow's visit",
            emailPersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedBookingReminderTodaySubject: "Today's visit",
            emailPersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailShcNarPersonalizedBookingReminderTomorrowSubject:
                "Tomorrow's visit",
            emailShcNarPersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}}. It is a drop-in booking, please come between {{visitStartTime}} - {{visitEndTime}} and {{visitEndTime}}. For more information, see {{marketingUrl}}.</mj-text>',

            emailShcNarPersonalizedBookingReminderTodaySubject: "Today's visit",
            emailShcNarPersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking today at {{careunitName}}. It is a drop-in booking, please come between {{visitStartTime}} - {{visitEndTime}} and {{visitEndTime}}. For more information, see {{marketingUrl}}.</mj-text>',

            emailPersonalizedNurseBookingReminder1CASubject: "Tomorrow's visit",
            emailPersonalizedNurseBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} tomorrow on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedNurseBookingReminder2CASubject: "Today's visit",
            emailPersonalizedNurseBookingReminder2CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedDoctorBookingReminder1CASubject: "Today's visit",
            emailPersonalizedDoctorBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">We would like to remind you of your booking at {{careunitName}} today at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedReturnNarEquipmentSubject: 'NAR equipment',
            emailPersonalizedReturnNarEquipmentBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to answer a final question. We also remind you to return the equipment today. Contact us if you are unable to login.</mj-text>',

            emailPersonalizedNarQuestionnaireSubject: 'NAR questions',
            emailPersonalizedNarQuestionnaireBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You received a call from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> (mobile BankID required) to answer any questions. A time for visits will be sent separately. Please contact us if you are unable to login.</mj-text>',

            emailPersonalizedNarRetestSubject: 'NAR retesting',
            emailPersonalizedNarRetestBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have been given time to pick up NAR equipment at {{careunitName}}. Log in here: <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> for more information.</mj-text>',

            emailPersonalizedAas12MonthsSubject: 'AAS questions',
            emailPersonalizedAas12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to fill out a form. Contact us if you are unable to login.</mj-text>',

            emailPersonalizedCpap1MonthSubject: 'CPAP questions',
            emailPersonalizedCpap1MonthBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to fill out a form. Contact us if you are unable to login.</mj-text>',

            emailPersonalizedCpap4MonthsSubject: 'CPAP questions',
            emailPersonalizedCpap4MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to fill out a form. Contact us if you are unable to login.</mj-text>',

            emailPersonalizedCpap12MonthsSubject: 'CPAP questions',
            emailPersonalizedCpap12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Please log in to {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> with BankID to fill out a form. Contact us if you are unable to login.</mj-text>',

            emailDepersonalizedPatientMustConfirmBookingSubject:
                'Waiting for booking confirmation',
            emailDepersonalizedPatientMustConfirmBookingBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedBookingCanceledSubject: 'Booking was canceled',
            emailDepersonalizedBookingCanceledBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Your booking at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}} has been canceled. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number to receive messages from {{careunitName}}.</mj-text>',

            emailDepersonalizedBookingConfirmedSubject: 'Booking was confirmed',
            emailDepersonalizedBookingConfirmedBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedBookingReminderTomorrowSubject:
                "Tomorrow's visit",
            emailDepersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedBookingReminderTodaySubject: "Today's visit",
            emailDepersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedNurseBookingReminder1CASubject:
                "Tomorrow's visit",
            emailDepersonalizedNurseBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedNurseBookingReminder2CASubject: "Today's visit",
            emailDepersonalizedNurseBookingReminder2CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedDoctorBookingReminder1CASubject: "Today's visit",
            emailDepersonalizedDoctorBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a reminder of {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedReturnNarEquipmentSubject: 'NAR equipment',
            emailDepersonalizedReturnNarEquipmentBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedNarQuestionnaireSubject: 'NAR questions',
            emailDepersonalizedNarQuestionnaireBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You are registered with {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and fill out a form.</mj-text>',

            emailDepersonalizedNarRetestSubject: 'NAR retesting',
            emailDepersonalizedNarRetestBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',

            emailDepersonalizedAas12MonthsSubject: 'AAS questions',
            emailDepersonalizedAas12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Sign in with BankID to read the message and confirm your email. Contact us if you are unable to login.</mj-text>',

            emailDepersonalizedCpap1MonthSubject: 'CPAP questions',
            emailDepersonalizedCpap1MonthBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Sign in with BankID to read the message and confirm your email. Contact us if you are unable to login.</mj-text>',

            emailDepersonalizedCpap4MonthsSubject: 'CPAP questions',
            emailDepersonalizedCpap4MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Sign in with BankID to read the message and confirm your email. Contact us if you are unable to login.</mj-text>',

            emailDepersonalizedCpap12MonthsSubject: 'CPAP questions',
            emailDepersonalizedCpap12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Sign in with BankID to read the message and confirm your email. Contact us if you are unable to login.</mj-text>',

            emailVerificationSubject: 'Email verification',
            emailVerificationBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Your verification code is {{verificationCode}}.</mj-text>',

            postalLayout: asset('postalLayout.sv.html'),

            postalPersonalizedBookingConfirmedSubject: 'Booking was confirmed',
            postalPersonalizedBookingConfirmedBody: asset(
                'postalPersonalizedBookingConfirmedBody.sv.html'
            ),

            einboxLayout: asset('einboxLayout.sv.html'),

            einboxPersonalizedBookingConfirmedSubject: 'Booking was confirmed',
            einboxPersonalizedBookingConfirmedBody: asset(
                'einboxPersonalizedBookingConfirmedBody.sv.html'
            ),

            processSimpleAppointmentName: 'Create appointment',
            processSimpleAppointmentDescription: 'Create appointment process',
            taskSimpleAppointmentBookingName: 'Appointment booking',
            taskInvestigationNarSimpleAppointmentBookingName:
                'Appointment booking',
            taskInvestigationDoctorVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskAasNarFirstSimpleAppointmentBookingName: 'Appointment booking',
            taskAasNarSecondSimpleAppointmentBookingName: 'Appointment booking',
            taskCpapVisitSimpleAppointmentBookingName: 'Appointment booking',
            taskCpapCtpBmaVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskCpapCtpDoctorVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskCpapAnalysisBmaVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskCpapAnalysisDoctorVisitSimpleAppointmentBookingName:
                'Appointment booking',
            taskSimpleAppointmentConfirmationName: 'Appointment confirmation',
            taskInvestigationNarSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskInvestigationDoctorVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskAasNarFirstSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskAasNarSecondSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapCtpBmaVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapCtpDoctorVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapAnalysisBmaVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskCpapAnalysisDoctorVisitSimpleAppointmentConfirmationName:
                'Appointment confirmation',
            taskSimpleAppointmentReminderName: 'Appointment reminder',
            taskSimpleAppointmentReminderBody: 'Confirm an appointment?',
            taskSimpleAppointmentCancelationName: 'Appointment cancelation',
            taskSimpleAppointmentReminderTimerName: 'Activate reminder',
            taskSimpleAppointmentCancelingTimerName: 'Start canceling',
            taskSimpleAppointmentCompleteTimerName:
                'Complete appointment process',
            taskSimpleAppointmentEkopostManualName:
                'Postal notification letter',
            taskSimpleAppointmentEkopostManualBody:
                'Send postal notification letter?',
            taskSimpleAppointmentEkopostSubprocessName:
                'Postal notification letter',

            processDoctorVisitName: 'Doctor visits',
            processDoctorVisitDescription: 'Doctor visit process',
            taskDoctorVisitBookingName: 'Doctor visit booking',
            taskDoctorVisitFormFillingName: 'Visit form filling',
            taskDoctorVisitFormTransformingName: 'Visit form transforming',
            taskDoctorVisitFormReviewingName: 'Visit form reviewing',
            taskDoctorVisitFormSendingName: 'Visit form sending',
            taskDoctorVisitTomorrowTimerName: 'Inform about visit tomorrow',
            taskDoctorVisitTodayTimerName: 'Inform about visit today',

            processNarName: 'NAR',
            processNarDescription: 'NAR process',
            taskNarBookingName: 'NAR booking',
            taskNarEssFormName: 'ESS questionnaire filling',
            taskNarHandingOutFormName: 'Equipment handing out',
            taskNarSleepFormName: 'Feedback filling',
            taskNarTakingBackFormName: 'Equipment taking back',
            taskNarBmaFormFillingName: 'NAR results filling for BMA',
            taskNarBmaFormTransformingName: 'NAR results transforming for BMA',
            taskNarBmaFormReviewingName: 'NAR results reviewing for BMA',
            taskNarBmaFormSendingName: 'NAR results sending for BMA',
            taskNarDoctorFormFillingName: 'NAR results filling for doctor',
            taskNarDoctorFormTransformingName:
                'NAR results transforming for doctor',
            taskNarDoctorFormReviewingName: 'NAR results reviewing for doctor',
            taskNarDoctorFormSendingName: 'NAR results sending for doctor',
            taskNarEssFormTimerName: 'Remind to fill in ESS patient form',
            taskNarTakingBackTimerName: 'Remind to take back equipment',

            taskNarTomorrowTimerName: 'Inform about visit tomorrow',
            taskNarTodayTimerName: 'Inform about visit today',

            processInvestigationName: 'Investigation',
            processInvestigationDescription:
                'Investigation process (SHC episode 1)',
            taskInvestigationRefDetailsFormName: 'Referral details filling',
            taskInvestigationNarName: 'NAR',
            taskInvestigationRefReplyName: 'Referral reply',
            taskInvestigationRefReplyBody: 'Please make referral reply',
            taskInvestigationTreatmentPlanName: 'Treatment plan',
            taskInvestigationTreatmentPlanBody: 'What next?',
            taskInvestigationDoctorVisitName: 'Clinical assessment',
            taskInvestigationSesarFormName: 'SESAR report filling',
            taskInvestigationCountyReportName: 'County report',
            taskInvestigationCountyReportBody: 'County report',

            processAasName: 'AAS',
            processAasDescription: 'AAS process (SHC episode 2)',
            taskAasRefDentistFormName: 'Referral to dentist filling',
            taskAasDentistFormFillingName: 'Answer from dentist filling',
            taskAasCpapTreatmentName: 'CPAP treatment?',
            taskAasCpapTreatmentBody: 'CPAP treatment?',
            taskAasDentistFormTransformingName: 'Dentist form transforming',
            taskAasDentistFormReviewingName: 'Dentist form reviewing',
            taskAasDentistFormSendingName:
                'Automatic dentist form sending to Takecare',
            taskAasFollowUp7WeeksTimerName: 'Waiting for 7 weeks',
            taskAasFollowUp12MonthsTimerName: 'Waiting for 12 months',
            taskAasProceedName: 'Proceed with patient',
            taskAasProceedBody: 'Proceed with patient',
            taskAasPatientAlertFormName: 'AAS problem report',
            taskAasPatient12MonthsFormName: 'AAS questionnaire 12 months',
            taskAasQ12MonthsTimerName:
                'Reminder to fill in AAS 12 months patient form',
            taskAasSesarFirstFormName: 'SESAR first report filling',
            taskAasCountyReportName: 'County report',
            taskAasCountyReportBody: 'County report',

            taskAasAnalysis7wFormFillingName:
                'AAS usage analysis after 7 weeks',
            taskAasAnalysis12mFormFillingName:
                'AAS usage analysis after 12 months',
            taskAasAnalysisAlertFormFillingName:
                'AAS usage analysis after problem report',
            taskAasAnalysisNarFormFillingName: 'AAS usage analysis after NAR',
            taskAasAnalysis7wFormTransformingName:
                'AAS usage analysis form transforming',
            taskAasAnalysis12mFormTransformingName:
                'AAS usage analysis form transforming',
            taskAasAnalysisAlertFormTransformingName:
                'AAS usage analysis form transforming',
            taskAasAnalysisNarFormTransformingName:
                'AAS usage analysis form transforming',
            taskAasAnalysis7wFormReviewingName:
                'AAS usage analysis form reviewing',
            taskAasAnalysis12mFormReviewingName:
                'AAS usage analysis form reviewing',
            taskAasAnalysisAlertFormReviewingName:
                'AAS usage analysis form reviewing',
            taskAasAnalysisNarFormReviewingName:
                'AAS usage analysis form reviewing',
            taskAasAnalysis7wFormSendingName:
                'Automatic AAS usage analysis form sending to Takecare',
            taskAasAnalysis12mFormSendingName:
                'Automatic AAS usage analysis form sending to Takecare',
            taskAasAnalysisAlertFormSendingName:
                'Automatic AAS usage analysis form sending to Takecare',
            taskAasAnalysisNarFormSendingName:
                'Automatic AAS usage analysis form sending to Takecare',

            taskAasRefAdjustmentFormName: 'Referral to split adjustment',
            taskAasSplitAdjustmentFormName:
                'Split adjustment: answer from dentist',
            taskAasSesarSecondFormName: 'SESAR final report filling',
            taskAasNarFirstName: 'NAR',
            taskAasNarSecondName: 'NAR',

            processCpapName: 'CPAP',
            processCpapDescription: 'CPAP process (SHC episode 3)',
            taskCpapVisitName: 'CPAP visit',
            taskCpapSesarFirstFormName: 'SESAR first report filling',
            taskCpapCountyReportName: 'County report',
            taskCpapCountyReportBody: 'County report',

            taskCpapCtpWhatNextManualName: 'What next?',
            taskCpapCtpWhatNextManualBody: 'What next?',

            taskCpapCtpStartFormName: 'Start form of control testing period',
            taskCpapCtpStartManualName:
                'Send control testing period start result to EMR?',
            taskCpapCtpStartManualBody:
                'Send control testing period start result to EMR?',
            taskCpapCtpStartTransformName:
                'Control testing period start form transforming',
            taskCpapCtpStartReviewName:
                'Control testing period start form reviewing',
            taskCpapCtpStartSendName:
                'Control testing period start form sending to Takecare',

            taskCpapCtpExtraFormName: 'Extra form of control testing period',
            taskCpapCtpExtraManualName:
                'Send control testing period extra result to EMR?',
            taskCpapCtpExtraManualBody:
                'Send control testing period extra result to EMR?',
            taskCpapCtpExtraTransformName:
                'Control testing period extra form transforming',
            taskCpapCtpExtraReviewName:
                'Control testing period extra form reviewing',
            taskCpapCtpExtraSendName:
                'Control testing period extra form sending to Takecare',

            taskCpapFollowUp1WeekTimerName: 'Waiting for 1 week',

            taskCpapFollowUp1MonthTimerName: 'Waiting for 1 month',
            taskCpapFollowUp4MonthsTimerName: 'Waiting for 4 months',
            taskCpapFollowUp12MonthsTimerName: 'Waiting for 12 months',
            taskCpapAlertName: 'CPAP monitoring alert',
            taskCpapAlertBody: 'Proceed with patient',
            taskCpapPatientProblemFormName: 'CPAP problem report',
            taskCpap1MonthFormName: 'CPAP questionnaire 1 month',
            taskCpap4MonthsFormName: 'CPAP questionnaire 4 months',
            taskCpap12MonthsFormName: 'CPAP questionnaire 12 months',
            taskCpapSesarSecondFormName: 'SESAR second report',

            taskCpapAnalysisWhatNextManualName: 'What next?',
            taskCpapAnalysisWhatNextManualBody: 'What next?',

            taskCpapAnalysis1mFormName: 'CPAP 1 month usage analysis',
            taskCpapAnalysis1mManualName:
                'Send CPAP 1 month usage analysis result to EMR?',
            taskCpapAnalysis1mManualBody:
                'Send CPAP 1 month usage analysis result to EMR?',
            taskCpapAnalysis1mTransformName:
                'CPAP 1 month usage analysis form transforming',
            taskCpapAnalysis1mReviewName:
                'CPAP 1 month usage analysis form reviewing',
            taskCpapAnalysis1mSendName:
                'CPAP 1 month usage analysis form sending to Takecare',

            taskCpapAnalysis4mFormName: 'CPAP 4 months usage analysis',
            taskCpapAnalysis4mManualName:
                'Send CPAP 4 months usage analysis result to EMR?',
            taskCpapAnalysis4mManualBody:
                'Send CPAP 4 months usage analysis result to EMR?',
            taskCpapAnalysis4mTransformName:
                'CPAP 4 months usage analysis form transforming',
            taskCpapAnalysis4mReviewName:
                'CPAP 4 months usage analysis form reviewing',
            taskCpapAnalysis4mSendName:
                'CPAP 4 months usage analysis form sending to Takecare',

            taskCpapAnalysis12mFormName: 'CPAP 12 months usage analysis',
            taskCpapAnalysis12mManualName:
                'Send CPAP 12 months usage analysis result to EMR?',
            taskCpapAnalysis12mManualBody:
                'Send CPAP 12 months usage analysis result to EMR?',
            taskCpapAnalysis12mTransformName:
                'CPAP 12 months usage analysis form transforming',
            taskCpapAnalysis12mReviewName:
                'CPAP 12 months usage analysis form reviewing',
            taskCpapAnalysis12mSendName:
                'CPAP 12 months usage analysis form sending to Takecare',

            taskCpapAnalysisAlertFormName: 'CPAP alert usage analysis',
            taskCpapAnalysisAlertManualName:
                'Send CPAP alert usage analysis result to EMR?',
            taskCpapAnalysisAlertManualBody:
                'Send CPAP alert usage analysis result to EMR?',
            taskCpapAnalysisAlertTransformName:
                'CPAP alert usage analysis form transforming',
            taskCpapAnalysisAlertReviewName:
                'CPAP alert usage analysis form reviewing',
            taskCpapAnalysisAlertSendName:
                'CPAP alert usage analysis form sending to Takecare',

            taskCpapAnalysisProblemFormName:
                'CPAP patient problem usage analysis',
            taskCpapAnalysisProblemManualName:
                'Send CPAP patient problem usage analysis result to EMR?',
            taskCpapAnalysisProblemManualBody:
                'Send CPAP patient problem usage analysis result to EMR?',
            taskCpapAnalysisProblemTransformName:
                'CPAP patient problem usage analysis form transforming',
            taskCpapAnalysisProblemReviewName:
                'CPAP patient problem usage analysis form reviewing',
            taskCpapAnalysisProblemSendName:
                'CPAP patient problem usage analysis form sending to Takecare',

            taskCpapAnalysisFollowFormName: 'CPAP follow up usage analysis',
            taskCpapAnalysisFollowManualName:
                'Send CPAP follow up usage analysis result to EMR?',
            taskCpapAnalysisFollowManualBody:
                'Send CPAP follow up usage analysis result to EMR?',
            taskCpapAnalysisFollowTransformName:
                'CPAP follow up usage analysis form transforming',
            taskCpapAnalysisFollowReviewName:
                'CPAP follow up usage analysis form reviewing',
            taskCpapAnalysisFollowSendName:
                'CPAP follow up usage analysis form sending to Takecare',

            taskCpapSesarThirdFormName: 'SESAR final report filling',
            taskCpapCtpBmaVisitName: 'BMA visit',
            taskCpapCtpDoctorVisitName: 'Doctor visit',
            taskCpapAnalysisBmaVisitName: 'BMA visit',
            taskCpapAnalysisDoctorVisitName: 'Doctor visit',

            taskCpapQ1MonthTimerName:
                'Reminder to fill in CPAP 1 month patient form',
            taskCpapQ4MonthsTimerName:
                'Reminder to fill in CPAP 4 months patient form',
            taskCpapQ12MonthsTimerName:
                'Reminder to fill in CPAP 12 months patient form',
            taskCpapFollowUpTimerName:
                'Waiting to activate analysis CPAP usage form',

            taskCpapVisitFormFillingName: 'Fill in CPAP start form',
            taskCpapCtpBmaVisitFormFillingName: 'Fill in CPAP BMA form',
            taskCpapCtpDoctorVisitFormFillingName: 'Fill in CPAP doctor form',
            taskCpapAnalysisBmaVisitFormFillingName: 'Fill in CPAP BMA form',
            taskCpapAnalysisDoctorVisitFormFillingName:
                'Fill in CPAP doctor form',

            taskCpapVisitFormReviewingName: 'Review CPAP visit form',
            taskCpapCtpBmaVisitFormReviewingName: 'Review BMA visit form',
            taskCpapCtpDoctorVisitFormReviewingName:
                'Reviewing doctor visit form',
            taskCpapAnalysisBmaVisitFormReviewingName: 'Review BMA visit form',
            taskCpapAnalysisDoctorVisitFormReviewingName:
                'Reviewing doctor visit form',

            processPatientAppointmentName: 'Make appointment',
            processPatientAppointmentDescription: 'Make appointment',
            taskPatientAppointmentBookingName: 'Appointment booking',
            taskNurseAppointmentBookingName: 'Appointment booking',
            taskPatientAppointmentConfirmationName: 'Appointment rescheduling',
            taskNurseAppointmentConfirmationName: 'Appointment rescheduling',
            taskDoctorSimpleAppointmentBookingName: 'Appointment booking',
            taskDoctorSimpleAppointmentConfirmationName:
                'Appointment confirmation',

            processDoctorAppointmentName: 'Make appointment',
            processDoctorAppointmentDescription: 'Make appointment',
            taskDoctorAppointmentBookingName: 'Appointment booking',
            taskDoctorAppointmentReschedulingName: 'Appointment rescheduling',
            taskDoctorAppointmentCancelingName:
                'Canceling appointment by patient',

            processCaMainName: 'City Akuten process',
            processCaMainDescription: 'City Akuten process',
            taskCaMainFirstBulletinName: 'Skapa första patientbulletin',
            taskCaMainSecondBulletinName: 'Skapa andra patientbulletin',
            taskCaMainNurseAppointmentName: 'Nurse visit appointment',
            taskCaMainNurseFirstTimerName: 'Nurse visit first timer',
            taskCaMainNurseSecondTimerName: 'Nurse visit second timer',
            taskCaMainHealthRefFormName: 'Patient data of nurse visit',
            taskCaMainHealthDeclarationFormName: 'Patient data of nurse visit',
            taskCaMainHealthDeclarationTransformName:
                'Conversion of patient data',
            taskCaMainHealthDeclarationReviewName: 'Review of patient data',
            taskCaMainHealthDeclarationSendName: 'Sending to EMR patient data',
            taskCaMainNurseAckManualName:
                'Acknowledgement of patient data (nurse visit)',
            taskCaMainNurseAckManualBody:
                'Acknowledgement of patient data (nurse visit)',
            taskCaMainDoctorAppointmentName: 'Doctor visit appointment',
            taskCaMainDoctorFirstTimerName: 'Doctor visit timer',
            taskCaMainDoctorAckManualName:
                'Acknowledgement of patient data (doctor visit)',
            taskCaMainDoctorAckManualBody:
                'Acknowledgement of patient data (doctor visit)',

            processShcFollowUpName: 'Follow up',
            processShcFollowUpDescription: 'Follow up process',
            taskShcFollowUpReqVisitFormName: 'Ask for visit',
            taskShcFollowUpAnalysisFormName: 'Follow up analysis',
            taskShcFollowUpAnalysisManualName: 'Journal notes',
            taskShcFollowUpAnalysisManualBody:
                'Do you want to send journal notes?',
            taskShcFollowUpAnalysisTransformName: 'Converting journal notes',
            taskShcFollowUpAnalysisReviewName: 'Reviewing journal notes',
            taskShcFollowUpAnalysisSendName: 'Sending journal notes',
            taskShcFollowUpDentistManualName: 'Referral to dentist',
            taskShcFollowUpDentistManualBody: 'Referral to dentist',
            taskShcFollowUpSendCardManualName: 'Process card and send back',
            taskShcFollowUpSendCardManualBody: 'Process card and send back',
            taskShcFollowUpNurseVisitSubprocessName: 'Book nurse visit',
            taskShcFollowUpDoctorVisitSubprocessName: 'Book doctor visit',
            taskShcFollowUpDropInVisitSubprocessName: 'Drop in visit',
            taskShcFollowUpCountyReportManualName: 'County report',
            taskShcFollowUpCountyReportManualBody: 'County report',
            taskShcFollowUpSesarFormName: 'SESAR report',

            processEkopostName: 'Send a postal letter',
            processEkopostDescription: 'Send a postal letter process',
            taskEkopostEinboxName: 'Looking for e-inbox',
            taskEkopostEinboxErrorName: 'E-inbox error',
            taskEkopostEinboxErrorBody: 'Should we retry?',
            taskEkopostSparName: 'Looking for address in SPAR',
            taskEkopostSparErrorName: 'SPAR error',
            taskEkopostSparErrorBody: 'Should we retry?',
            taskEkopostEinboxPdfGeneratingName: 'Preparing a PDF',
            taskEkopostEinboxPdfReviewingName: 'Approving a PDF',
            taskEkopostPostalPdfGeneratingName: 'Preparing a PDF',
            taskEkopostPostalPdfReviewingName: 'Approving a PDF',
            taskEkopostPdfSendingName: 'Sending a postal letter',
            taskEkopostPdfSendingErrorName: 'Sending error',
            taskEkopostPdfSendingErrorBody: 'Should we retry?',

            auditCareprofForbidden: 'Unauthorized API usage attempt',
            auditProcessActivated: 'Process started',
            auditProcessCareunitStateChanged: 'Process state changed',
            auditProcessPatientStateChanged: 'Process state changed (patient)',
            auditProcessSettingsChanged:
                'Process Setting (runtime variables) changed',
            auditProcessCompleted: 'Process ended',
            auditProcessTerminated: 'Process forced to teminate',
            auditTaskActivated: 'Start of task',
            auditTaskErrorThrown: 'Task throws error',
            auditTaskTerminated: 'Task forced to terminate',
            auditTaskTimerTriggered: 'Process timer triggered',
            auditTaskCompleted: 'Task completed',
            auditAdminStaticalBulletinCreate:
                'Tenant admin creates a statical bulletin',
            auditAdminStaticalBulletinUpdate:
                'Tenant admin updates a statical bulletin',
            auditAdminStaticalBulletinDelete:
                'Tenant admin deletes a statical bulletin',
            auditAdminDynamicalBulletinTemplateCreate:
                'Tenant admin creates a dynamical bulletin template',
            auditAdminDynamicalBulletinTemplateUpdate:
                'Tenant admin updates a dynamical bulletin template',
            auditAdminDynamicalBulletinTemplateDelete:
                'Tenant admin deletes a dynamical bulletin template',
            auditSuperadminEmailUnblacklist:
                'Super admin unblacklists an email',
            auditAdminMappingCreate: 'Tenant admin creates a mapping',
            auditAdminMappingUpdate: 'Tenant admin updates a mapping',
            auditAdminMappingDelete: 'Tenant admin deletes a mapping',
            auditAdminTemplateCreate: 'Tenant admin creates a template',
            auditAdminTemplateUpdate: 'Tenant admin updates a template',
            auditAdminTemplateDelete: 'Tenant admin deletes a template',
            auditCareprofAuthStart: 'Doctor authentication starts',
            auditCareprofAuthComplete: 'Doctor logged in',
            auditCareprofSessionProlong: 'Doctor prolong his session',
            auditCareprofLogout: 'Doctor logged out',
            auditPatientAuthStart: 'Patient authentication starts',
            auditPatientAuthComplete: 'Patient logged in',
            auditPatientSessionProlong: 'Patient prolong his session',
            auditPatientLogout: 'Patient logged out',
            auditAdminAuthComplete: 'Tenant admin logged in',
            auditAdminSessionProlong: 'Tenant admin prolong his session',
            auditAdminLogout: 'Tenant admin logged out',
            auditArtefactVisibilityStateChange: 'Artefact was chilled',
            auditArtefactCreated: 'Artefact was created',
            auditArtefactOpenedByUser: 'Artefact was opened by user',
            auditPatientEmailConsent:
                'Patient provided consent to receive emails',
            auditPatientSmsConsent: 'Patient provided consent to receive SMS',
            auditPatientEmailVerification: 'Patient confirmed email',
            auditPatientPhoneVerification: 'Patient confirmed phone',
            auditPatientEmailVerificationRequest:
                'Patient requests email verification',
            auditPatientPhoneVerificationRequest:
                'Patient requests phone verification',
            auditPatientEmailNotification: 'Email was sent to patient',
            auditPatientSmsNotification: 'SMS was sent to patient',
            auditAdminCareunitCreate: 'Tenant admin creates a careunit',
            auditAdminCareunitUpdate: 'Tenant admin updates a careunit',
            auditAdminCareunitDelete: 'Tenant admin deletes a careunit',
            auditAdminCareprofCreate: 'Tenant admin creates a careprof',
            auditAdminCareprofUpdate: 'Tenant admin updates a careprof',
            auditAdminCareprofDelete: 'Tenant admin deletes a careprof',
            auditAdminPatientCreate: 'Tenant admin creates a patient',
            auditAdminPatientUpdate: 'Tenant admin updates a patient',
            auditAdminPatientDelete: 'Tenant admin deletes a patient',
            auditSuperadminAuthComplete: 'Super admin logged in',
            auditSuperadminLogout: 'Super admin logged out',
            auditSuperadminMicroserviceCreate:
                'Super admin creates a microservice',
            auditSuperadminMicroserviceUpdate:
                'Super admin updates a microservice',
            auditSuperadminMicroserviceDelete:
                'Super admin deletes a microservice',
            auditSuperadminTenantCreate: 'Super admin creates a tenant',
            auditSuperadminTenantUpdate: 'Super admin updates a tenant',
            auditSuperadminTenantDelete: 'Super admin deletes a tenant',
            auditSuperadminAdminCreate: 'Super admin creates a tenant admin',
            auditSuperadminAdminUpdate: 'Super admin updates a tenant admin',
            auditSuperadminAdminDelete: 'Super admin deletes a tenant admin',
            auditSuperadminMaintenanceSchedule:
                'Super admin schedules a maintenance',
            auditSuperadminMaintenanceUnschedule:
                'Super admin unschedules a maintenance',

            taskTypeSimpleTimer: 'Delay',
            taskTypeNotificationTimer: 'Delayed notification',
            taskTypeManual: 'Manual choose',
            taskTypeManualTrigger: 'Optional flow',
            taskTypeAssessment: 'Fill an assessment',
            taskTypeTakecareBooking: 'Book a doctor',
            taskTypeTakecareTerms: 'Manual edit of converted assessment',
            taskTypeSubprocess: 'Subprocess',
            taskTypeTakecareConversion:
                'Convert an assessment into TakeCare format',
            taskTypeTakecareXchangeSending:
                'Send converted assessment to TakeCare',
            taskTypeTakecareBookingCanceling: 'Cancel doctor booking',
            taskTypeBulletinStatical: 'Assign prefilled bulletin to a patient',
            taskTypeBulletinDynamical:
                'Assign individual bulletin to a patient',
            taskTypeMiniqResult: 'MiniQ result',
            taskTypeMiniqQuery: 'MiniQ query',
            taskTypeMiniqMedications: 'MiniQ medications',
            taskTypeZoomMeeting: 'Zoom meeting',

            artefactTypeAssessment: 'Assessment',
            artefactTypeTakecareBooking: 'Doctor booking',
            artefactTypeTakecareTerms: 'Converted assessment',
            artefactTypeBulletinStatical: "Patient's prefilled bulletin",
            artefactTypeBulletinDynamical: "Patient's individual bulletin",

            artefactCodeMiniqFinalFormAssessment: 'MiniQ final form',
            artefactCodeRegularPatientReportingAssessment:
                'Regular patient reporting',
            artefactCodeDrVisitPhase20QuestionsFormAssessment:
                'Doctor visit "Phase 20" form',
            artefactCodeCpapCf1CareStartAssessment: 'CPAP care start form',
            artefactCode00SampleTemplateTakecareTerms: 'Sample template',
            artefactCode0ReferralNoteAssessment: 'Referral note',
            artefactCodeAasDentistResponseAssessment: 'AAS dentist response',
            artefactCodeAasDentistReferralAssessment: 'AAS referral response',
            artefactCodeDailyForm: 'Daily form',
            artefactCode00SampleTemplateAssessment: 'Sample template',
            artefactCodeAsihDetailsFormAssessment: 'ASIH details form',
            artefactCode3HowWellDidYouSleepAssessment:
                'NAR: how well did you sleep',
            artefactCode2EquipmentHandingOutFormAssessment:
                'NAR: equipment handing out',
            artefactCode1QuestionaireEssAssessment: 'ESS questionaire',
            artefactCode4EquipmentTakeBackFormAssessment:
                'NAR: equipment take back',
            artefactCodeSESARInvestigationFlowAssessment: 'SESAR form',
            artefactCode5NarAssesmentEssQuestionaireAssessment:
                'NAR: ESS questionaire',
            artefactCodeDoctorVisitAAssessment: 'Doctor visit',
            artefactCodeInfoBulletin: "Patient's individual bulletin",

            processCareunitStateVisitCanceled: 'Visit canceled',
            processCareunitStateBooking: 'Booking',
            processCareunitStateVisitScheduled: 'Visit scheduled',
            processCareunitStateJournalNotes: 'Journal notes',
            processCareunitStateSignToTakecare: 'Sign to Takecare',
            processCareunitStateSignedToTakecare: 'Signed to Takecare',
            processCareunitStateNurseBoking: 'Nurse booking',
            processCareunitStateHealthSurvey: 'Health survey',
            processCareunitStateNurseVisit: 'Nurse visit',
            processCareunitStateDoctorBooking: 'Doctor booking',
            processCareunitStateDoctorVisit: 'Doctor visit',
            processCareunitStateVisitsComplete: 'Visits complete',
            processCareunitStateStarted: 'Started',
            processCareunitStateDentist: 'Dentist',
            processCareunitStateAasStarted: 'AAS started',
            processCareunitStateCpapPickUp: 'CPAP pick up',
            processCareunitStateCpapInUse: 'CPAP in use',
            processCareunitStateFinished: 'Finished',
            processCareunitStateReferral: 'Referral',
            processCareunitStateNarProcess: 'NAR process',
            processCareunitStateClinicalAssessment: 'Clinical assessment',
            processCareunitStateReporting: 'Reporting',
            processCareunitStatePickUpNar: 'Pick up NAR',
            processCareunitStateUsingNar: 'Using NAR',
            processCareunitStateNarAnalysis: 'NAR analysis',
            processCareunitStateConfirmed: 'Confirmed',
            processCareunitStateSelfAssessment: 'Fill in self-assessment',
            processCareunitStateHandleSelfAssessment: 'Manage self-assessment',
            processCareunitStateCanceled: 'Canceled',
            processCareunitStateReady: 'Ready',
            processCareunitStateInProgress: 'In progress',

            processPatientStateVisitCanceled: 'Visit canceled',
            processPatientStateVisitScheduled: 'Visit scheduled',
            processPatientStateBooking: 'Booking',
            processPatientStateJournalNotes: 'Journal notes',
            processPatientStateNurseBoking: 'Nurse booking',
            processPatientStateHealthSurvey: 'Health survey',
            processPatientStateNurseVisit: 'Nurse visit',
            processPatientStateDoctorBooking: 'Doctor booking',
            processPatientStateDoctorVisit: 'Doctor visit',
            processPatientStateVisitsComplete: 'Visits complete',
            processPatientStateStarted: 'Started',
            processPatientStateDentist: 'Dentist',
            processPatientStateAasStarted: 'AAS started',
            processPatientStateCpapPickUp: 'CPAP pick up',
            processPatientStateCpapInUse: 'CPAP in use',
            processPatientStateFinished: 'Finished',
            processPatientStateWaitingForBookingConfirmation:
                'Waiting for booking confirmation',
            processPatientStateNarEquipmentTest: 'NAR testing',
            processPatientStateReturnNar: 'NAR returning',
            processPatientStateConfirmed: 'Confirmed',
            processPatientStateSelfAssessment: 'Fill in self-assessment',
            processPatientStateHandleSelfAssessment: 'Manage self-assessment',
            processPatientStateSignedToTakeCare: 'Signed to Takecare',
            processPatientStateCanceled: 'Canceled',
            processPatientStateReady: 'Ready',
            processPatientStateInProgress: 'In progress',

            httpErrorTooManyEmailVerificationAttempts:
                'too many email verification attempts',
            httpErrorTooManyEmailVerificationRequests:
                'too many email verification requests',
            httpErrorTooManySmsVerificationAttempts:
                'too many sms verification attempts',
            httpErrorTooManySmsVerificationRequests:
                'too many sms verification requests',
            httpErrorTenantDataIsAbsent: 'tenant data is absent',
            httpErrorTenantDataMismatch: 'tenant data mismatch',
            httpErrorIncorrectToken: 'incorrect token',
            httpErrorInsufficientPermissions: 'insufficient permissions',
            httpErrorMaintenance: 'maintenance',
            httpErrorSchemaValidationError: 'schema validation error',
            httpErrorCareunitInconsistent: 'careunit inconsistent',
            httpErrorCareprofInconsistent: 'careprof inconsistent',
            httpErrorCanNotFindComar: 'can not find comar',
            httpErrorCanNotFindStatical: 'can not find statical',
            httpErrorStaticalCodeExists: 'statical code exists',
            httpErrorCanNotFindTemplate: 'can not find template',
            httpErrorTemplateCodeExists: 'template code exists',
            httpErrorCanNotFindMapping: 'can not find mapping',
            httpErrorCanNotFindMappingById: 'can not find mapping by id',
            httpErrorMappingCodeExists: 'mapping code exists',
            httpErrorCanNotFindReport: 'can not find report',
            httpErrorCanNotDeleteReport: 'can not delete report',
            httpErrorCanNotFindTemplateMetadata:
                'can not find template metadata',
            httpErrorTemplateDataAbsent: 'template data absent',
            httpErrorResourceFilesAreMissed: 'resource files are missed',
            httpErrorCanNotFindTemplateToUpdate:
                'can not find template to update',
            httpErrorCanNotFindTemplateToPatch:
                'can not find template to patch',
            httpErrorCanNotFindTemplateToDelete:
                'can not find template to delete',
            httpErrorIncorrectTenantOrCredentials:
                'incorrect tenant or credentials',
            httpErrorIncorrectCredentials: 'incorrect credentials',
            httpErrorWrongUserType: 'wrong user type',
            httpErrorIncorrectTenant: 'incorrect tenant',
            httpErrorGrandIdUsernameMissing: 'username missing',
            httpErrorCanNotFindArtefact: 'can not find artefact',
            httpErrorCanNotUpdateArtefactState: 'can not update artefact state',
            httpErrorPdfIsMissingOrCorrupted: 'pdf is missing or corrupted',
            httpErrorCanNotFindProcessInstance: 'can not find process instance',
            httpErrorCanNotFindTaskInstance: 'can not find task instance',
            httpErrorCanNotFindCareprof: 'can not find careprof',
            httpErrorCareprofNotExists: 'careprof not exists',
            httpErrorCareprofUsernameExists: 'careprof username exists',
            httpErrorCareprofPersonalNumberExists:
                'careprof personal number exists',
            httpErrorCareprofHsaidExists: 'careprof hsaid exists',
            httpErrorPasswordAuthNotAllowed: 'password auth not allowed',
            httpErrorLabelNameAlreadyExists: 'label name already exists',
            httpErrorCanNotFindLabel: 'can not find label',
            httpErrorCanNotFindCareunit: 'can not find careunit',
            httpErrorCareunitCodeExists: 'careunit code exists',
            httpErrorCareunitHsaidExists: 'careunit hsaid exists',
            httpErrorCareunitNotExists: 'careunit not exists',
            httpErrorCanNotFindPatient: 'can not find patient',
            httpErrorPatientPersonalNumberExists:
                'patient personal number exists',
            httpErrorInvalidEmailVerificationCode:
                'invalid email verification code',
            httpErrorInvalidSmsVerificationCode:
                'invalid sms verification code',
            httpErrorPatientNotExists: 'patient not exists',
            httpErrorLabelIdAlreadyAdded: 'label id already added',
            httpErrorCanNotFindProcessConfig: 'can not find process config',
            httpErrorCorrespondingProcessConfigExists:
                'corresponding process config exists',
            httpErrorPsdKeyExists: 'psd key exists',
            httpErrorPsdMetaDoesNotExists: 'psd meta does not exists',
            httpErrorPsdKeyCanNotBeChanged: 'psd key can not be changed',
            httpErrorCanNotFindItem: 'can not find item',
            httpErrorCanNotFindPsdMeta: 'can not find psd meta',
            httpErrorIncorrectDataValueType: 'incorrect data value type',
            httpErrorInconsistentCareunitCode: 'inconsistent careunit code',
            httpErrorCanNotFindMicroservice: 'can not find microservice',
            httpErrorBaseMsCanNotHaveTasks: 'base ms can not have tasks',
            httpErrorProcessMsShoudHaveTasks: 'process ms shoud have tasks',
            httpErrorMsidExists: 'msid exists',
            httpErrorCanNotFindTenantAdmin: 'can not find tenant admin',
            httpErrorTenantDoesNotExists: 'tenant does not exists',
            httpErrorAdminUsernameExists: 'admin username exists',
            httpErrorAdminUsernameCouldNotBeChanged:
                'admin username could not be changed',
            httpErrorCanNotFindPatientInCareunit:
                'Can not find patient in careunit',
            httpErrorCanNotFindAdmin: 'can not find admin',
            httpErrorCanNotFindTenant: 'can not find tenant',
            httpErrorTenantCodeExists: 'tenant code exists',
            httpErrorSomeMsDoesNotExists: 'some ms does not exists',
            httpErrorItIsNotYourProcessInstance:
                'it is not your process instance',
            httpErrorProcessInstanceIsNotActive:
                'process instance is not active',
            httpErrorTaskInstanceIsNotActive: 'task instance is not active',
            httpErrorPatientDataAbsent: 'patient data absent',
            httpErrorCareunitDataAbsent: 'careunit data absent',
            httpErrorTenantDataAbsent: 'tenant data absent',
            httpErrorCanNotFindCareunitProcessConfig:
                'can not find careunit process config',
            httpErrorIncorrectProcessConfig: 'incorrect process config',
            httpErrorProcessIsNotActive: 'process is not active',
            httpErrorProcessIsNotStandalone: 'process is not standalone',
            httpErrorForbiddenTemplateCode: 'forbidden template code',
            httpErrorTemplateChargingIsAbsent: 'template charging is absent',
            httpErrorAssessmentIsAlreadyCreated:
                'assessment is already created',
            httpErrorIncorrectPatient: 'incorrect patient',
            httpErrorCareunitAlreadyUnlinked: 'Careunit already Unlinked',
            httpErrorCareunitAlreadyLinked: 'Careunit already linked',
            httpErrorAssessmentIsNotCreated: 'assessment is not created',
            httpErrorTemplateCodeCanNotBeChanged:
                'template code can not be changed',
            httpErrorBookingIsAlreadyCreated: 'booking is already created',
            httpErrorSlotIsNotAvailable: 'slot is not available',
            httpErrorCanNotFindCorrespondingBooking:
                'can not find corresponding booking',
            httpErrorBulletinIsNotCreated: 'bulletin is not created',
            httpErrorBulletinIsAlreadyCreated: 'bulletin is already created',
            httpErrorIncorrectCompleteOption: 'incorrect complete option',
            httpErrorCanNotFindInnerConfigOfTask:
                'can not find inner config of task',
            httpErrorTaskDataIsNotCreated: 'task data is not created',
            httpErrorMedicationsIsNotSavedLocally:
                'medications is not saved locally',
            httpErrorMiniqFullResultIsNotSaved:
                'miniq full result is not saved',
            httpErrorMiniqFullResultIsNotFound:
                'miniq full result is not found',
            httpErrorPdfIsNotCreated: 'pdf is not created',
            httpErrorTakecareDataIsAbsent: 'takecare data is absent',
            httpErrorTakecareDocIsNotCreated: 'takecare doc is not created',
            httpErrorListOfTermsCanNotBeEmpty: 'list of terms can not be empty',
            httpErrorUnexpecteDatabaseError: 'unexpecte database error',
            httpErrorEmrRequestTimeout: 'emr request timeout',
            httpErrorUnexpectedTakecareResponse: 'unexpected takecare response',
            httpErrorUnexpectedError: 'unexpected error'
        },
        tenant1: {}
    },
    sv: {
        default: {
            termsAndConditions: 'Foo bar',

            smsPersanolizedNurseBookingConfirmedCA:
                'Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. För mer information, se {{marketingUrl}}.',
            smsDepersonalizedNurseBookingConfirmedCA:
                'Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',
            emailPersonalizedNurseBookingConfirmedCASubject:
                'Bokningen bekräftades',
            emailPersonalizedNurseBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
            emailDepersonalizedNurseBookingConfirmedCASubject:
                'Bokningen bekräftades',
            emailDepersonalizedNurseBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            smsPersanolizedDoctorBookingConfirmedCA:
                'Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. För mer information, se {{marketingUrl}}.',
            smsDepersonalizedDoctorBookingConfirmedCA:
                'Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',
            emailPersonalizedDoctorBookingConfirmedCASubject:
                'Bokningen bekräftades',
            emailPersonalizedDoctorBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
            emailDepersonalizedDoctorBookingConfirmedCASubject:
                'Bokningen bekräftades',
            emailDepersonalizedDoctorBookingConfirmedCABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            smsPersonalizedPatientMustConfirmBooking:
                'Du har fått en kallelse från {{careunitName}} och vi ber vi därför dig logga in i vår portal {{appUrl}} med hjälp av BankID för att bekräfta besöket. Vänligen kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',
            smsPersonalizedBookingCanceled:
                'Din tid hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}} är nu avbokad. Vänligen kontakta {{careunitName}} om du önskar boka en ny tid. För mer information, vänligen se {{marketingUrl}}.',
            smsPersonalizedBookingConfirmed:
                'Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. För mer information, se {{marketingUrl}}.',
            smsPersonalizedBookingReminderTomorrow:
                'Vi vill påminna dig om din bokning hos {{careunitName}} imorgon den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. För mer information, se {{marketingUrl}}.',
            smsPersonalizedBookingReminderToday:
                'Vi vill påminna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}. För mer information, se {{marketingUrl}}.',
            smsShcNarPersonalizedBookingReminderTomorrow:
                'Hej, vi vill påminna dig om att hämta din sömnutrustning hos {{careunitName}} den {{visitDate}}. Det är en drop-in tid, vänligen kom i intervallet mellan kl {{visitStartTime}} - {{visitEndTime}} och {{visitEndTime}}. För mer information, se {{marketingUrl}}. Välkommen!',
            smsShcNarPersonalizedBookingReminderToday:
                'Hej, vi vill påminna dig om att hämta din sömnutrustning idag hos {{careunitName}}. Det är en drop-in tid, vänligen kom i intervallet mellan kl {{visitStartTime}} - {{visitEndTime}} och {{visitEndTime}}. För mer information, se {{marketingUrl}}. Välkommen!',

            smsPersonalizedNurseBookingReminder1CA:
                'Vi vill påminna dig om din bokning hos {{careunitName}} imorgon den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}. För mer information, se {{marketingUrl}}.',
            smsPersonalizedNurseBookingReminder2CA:
                'Vi vill påminna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}. För mer information, se {{marketingUrl}}.',
            smsPersonalizedDoctorBookingReminder1CA:
                'Vi vill påminna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}. För mer information, se {{marketingUrl}}.',

            smsPersonalizedReturnNarEquipment:
                'Vänligen logga in i {{careunitName}} portal {{appUrl}} med BankID för att svara på en sista fråga. Vi påminner även om att lämna tillbaka utrustningen idag. Kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',
            smsPersonalizedNarQuestionnaire:
                'Du har fått en kallelse från {{careunitName}}. Vänligen logga in på {{appUrl}} (mobilt BankID krävs) för att svara på några frågor. En tid för besök kommer skickas separat. Vänligen kontakta oss om du inte har möjlighet att logga in, se {{marketingUrl}}.',
            smsPersonalizedNarRetest:
                'Du har fått en tid för att hämta upp NAR-utrustning hos {{careunitName}}. Logga in här: {{appUrl}} för mer information. För mer information, se {{marketingUrl}}.',
            smsPersonalizedAas12Months:
                'Vänligen logga in i {{careunitName}} portal {{appUrl}} med BankID för att fylla i ett formulär. Kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',

            smsPersonalizedCpap1Month:
                'Vänligen logga in i {{careunitName}} portal {{appUrl}} med BankID för att fylla i ett formulär. Kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',
            smsPersonalizedCpap4Months:
                'Vänligen logga in i {{careunitName}} portal {{appUrl}} med BankID för att fylla i ett formulär. Kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',
            smsPersonalizedCpap12Months:
                'Vänligen logga in i {{careunitName}} portal {{appUrl}} med BankID för att fylla i ett formulär. Kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',

            smsDepersonalizedPatientMustConfirmBooking:
                'Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',
            smsDepersonalizedBookingCanceled:
                'Din bokning hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}} har avbokats. För mer information, vänligen se {{marketingUrl}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer för att få meddelanden från {{careunitName}}.',
            smsDepersonalizedBookingConfirmed:
                'Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',
            smsDepersonalizedBookingReminderTomorrow:
                'Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',
            smsDepersonalizedBookingReminderToday:
                'Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',

            smsDepersonalizedNurseBookingReminder1CA:
                'Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',
            smsDepersonalizedNurseBookingReminder2CA:
                'Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',
            smsDepersonalizedDoctorBookingReminder1CA:
                'Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',

            smsDepersonalizedReturnNarEquipment:
                'Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',
            smsDepersonalizedNarQuestionnaire:
                'Du har registrerats hos {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och fylla i ett formulär. För mer information, vänligen se {{marketingUrl}}.',
            smsDepersonalizedNarRetest:
                'Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på {{appUrl}} för att konfirmera ditt mobilnummer och läsa meddelandet. För mer information, vänligen se {{marketingUrl}}.',
            smsDepersonalizedAas12Months:
                'Du har fått ett meddelande hos {{careunitName}} portal {{appUrl}}. Logga in med BankID för att läsa meddelandet och konfirmera ditt mobilnummer. Kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',

            smsDepersonalizedCpap1Month:
                'Du har fått ett meddelande hos {{careunitName}} portal {{appUrl}}. Logga in med BankID för att läsa meddelandet och konfirmera ditt mobilnummer. Kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',
            smsDepersonalizedCpap4Months:
                'Du har fått ett meddelande hos {{careunitName}} portal {{appUrl}}. Logga in med BankID för att läsa meddelandet och konfirmera ditt mobilnummer. Kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',
            smsDepersonalizedCpap12Months:
                'Du har fått ett meddelande hos {{careunitName}} portal {{appUrl}}. Logga in med BankID för att läsa meddelandet och konfirmera ditt mobilnummer. Kontakta oss om du inte har möjlighet att logga in. För mer information, se {{marketingUrl}}.',

            smsVerification: 'Din verifieringskod är {{verificationCode}}.',

            emailLayout: `<mjml>
  <mj-head>
    <mj-attributes>
      <mj-class name="image" width="174px" align="center"></mj-class>
      <mj-class name="title" font-size="20px" color="black" font-family="helvetica" line-height="25px" align="center"></mj-class>
      <mj-class name="button" font-family="Helvetica" background-color="#0052CC" color="white" height="32px" width="184px" font-size="20px" border-radius="10px" align="center"></mj-class>
      <mj-class name="subtitle" color="black" font-family="helvetica" line-height="20px" align="center"></mj-class>
      <mj-class name="divider" width="100%" border-width="2px" border-color="#EBEDF1"></mj-class>
      <mj-class name="footerText" font-size="12px" color="black" font-family="helvetica" line-height="15px" align="center"></mj-class>
    </mj-attributes>
  </mj-head>
  <mj-body background-color="white">
    <mj-section>
      <mj-column width="100%">
        <mj-image mj-class="image" src="cid:ic-illustration-3.png" padding-top="24px" padding-bottom="12px"></mj-image>
        {{emailBody}}
        <mj-button mj-class="button" href="{{appUrl}}" padding="0px" padding-bottom="0px">
          Logga in
        </mj-button>
        <mj-text mj-class="subtitle" padding="24px" font-size="16px">
          För mer information, vänligen se
          <a style="color:#0052CC" href="{{marketingUrl}}">
            {{marketingUrl}}
          </a>
        </mj-text>
        <mj-divider mj-class="divider" padding-top="0px" padding-bottom="24px"></mj-divider>
        <mj-text mj-class="footerText" padding-top="0px" padding-bottom="16px">Copyright © * 2020 * *{{tenantName}}*, Alla rättigheter förbehållna.</mj-text>
        <mj-text mj-class="footerText" font-weight="700" padding-top="0px" padding-bottom="0px">Vill du ändra hur du får dessa e-postmeddelanden?</mj-text>
        <mj-text mj-class="footerText" padding-top="0px" padding-bottom="16px">Du kan
          <a style="color:#0052CC" href="{{appUrl}}">
            uppdatera dina inställningar
          </a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`,

            emailPersonalizedPatientMustConfirmBookingSubject:
                'Väntar på bokningsbekräftelsen',
            emailPersonalizedPatientMustConfirmBookingBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått en kallelse från {{careunitName}} och vi ber vi därför dig logga in i vår portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med hjälp av BankID för att bekräfta besöket. Vänligen kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailPersonalizedBookingCanceledSubject: 'Bokningen avbröts',
            emailPersonalizedBookingCanceledBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Din tid hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}} är nu avbokad. Vänligen kontakta {{careunitName}} om du önskar boka en ny tid.</mj-text>',

            emailPersonalizedBookingConfirmedSubject: 'Bokningen bekräftades',
            emailPersonalizedBookingConfirmedBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedBookingReminderTomorrowSubject:
                'Morgondagens besök',
            emailPersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill påminna dig om din bokning hos {{careunitName}} imorgon den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedBookingReminderTodaySubject: 'Dagens besök',
            emailPersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill påminna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailShcNarPersonalizedBookingReminderTomorrowSubject:
                'Morgondagens besök',
            emailShcNarPersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Hej, vi vill påminna dig om att hämta din sömnutrustning hos {{careunitName}} den {{visitDate}}. Det är en drop-in tid, vänligen kom i intervallet mellan kl {{visitStartTime}} - {{visitEndTime}} och {{visitEndTime}}. För mer information, se {{marketingUrl}}. Välkommen!</mj-text>',

            emailShcNarPersonalizedBookingReminderTodaySubject: 'Dagens besök',
            emailShcNarPersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Hej, vi vill påminna dig om att hämta din sömnutrustning idag hos {{careunitName}}. Det är en drop-in tid, vänligen kom i intervallet mellan kl {{visitStartTime}} - {{visitEndTime}} och {{visitEndTime}}. För mer information, se {{marketingUrl}}. Välkommen!</mj-text>',

            emailPersonalizedNurseBookingReminder1CASubject:
                'Morgondagens besök',
            emailPersonalizedNurseBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill påminna dig om din bokning hos {{careunitName}} imorgon den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedNurseBookingReminder2CASubject: 'Dagens besök',
            emailPersonalizedNurseBookingReminder2CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill påminna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedDoctorBookingReminder1CASubject: 'Dagens besök',
            emailPersonalizedDoctorBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vi vill påminna dig om din bokning hos {{careunitName}} idag kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',

            emailPersonalizedReturnNarEquipmentSubject: 'NAR-utrustning',
            emailPersonalizedReturnNarEquipmentBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vänligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID för att svara på en sista fråga. Vi påminner även om att lämna tillbaka utrustningen idag. Kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailPersonalizedNarQuestionnaireSubject: 'NAR frågor',
            emailPersonalizedNarQuestionnaireBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått en kallelse från {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> (mobilt BankID krävs) för att svara på några frågor. En tid för besök kommer skickas separat. Vänligen kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailPersonalizedNarRetestSubject: 'NAR testar om',
            emailPersonalizedNarRetestBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått en tid för att hämta upp NAR-utrustning hos {{careunitName}}. Logga in här: <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för mer information.</mj-text>',

            emailPersonalizedAas12MonthsSubject: 'AAS frågor',
            emailPersonalizedAas12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vänligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID för att fylla i ett formulär. Kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailPersonalizedCpap1MonthSubject: 'CPAP frågor',
            emailPersonalizedCpap1MonthBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vänligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID för att fylla i ett formulär. Kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailPersonalizedCpap4MonthsSubject: 'CPAP frågor',
            emailPersonalizedCpap4MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vänligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID för att fylla i ett formulär. Kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailPersonalizedCpap12MonthsSubject: 'CPAP frågor',
            emailPersonalizedCpap12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Vänligen logga in i {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> med BankID för att fylla i ett formulär. Kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailDepersonalizedPatientMustConfirmBookingSubject:
                'Väntar på bokningsbekräftelsen',
            emailDepersonalizedPatientMustConfirmBookingBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            emailDepersonalizedBookingCanceledSubject: 'Bokningen avbröts',
            emailDepersonalizedBookingCanceledBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Din bokning hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}} har avbokats. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer för att få meddelanden från {{careunitName}}.</mj-text>',

            emailDepersonalizedBookingConfirmedSubject: 'Bokningen bekräftades',
            emailDepersonalizedBookingConfirmedBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            emailDepersonalizedBookingReminderTomorrowSubject:
                'Morgondagens besök',
            emailDepersonalizedBookingReminderTomorrowBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            emailDepersonalizedBookingReminderTodaySubject: 'Dagens besök',
            emailDepersonalizedBookingReminderTodayBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            emailDepersonalizedNurseBookingReminder1CASubject:
                'Morgondagens besök',
            emailDepersonalizedNurseBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            emailDepersonalizedNurseBookingReminder2CASubject: 'Dagens besök',
            emailDepersonalizedNurseBookingReminder2CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            emailDepersonalizedDoctorBookingReminder1CASubject: 'Dagens besök',
            emailDepersonalizedDoctorBookingReminder1CABody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått en påminnelse av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            emailDepersonalizedReturnNarEquipmentSubject: 'NAR-utrustning',
            emailDepersonalizedReturnNarEquipmentBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            emailDepersonalizedNarQuestionnaireSubject: 'NAR frågor',
            emailDepersonalizedNarQuestionnaireBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har registrerats hos {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och fylla i ett formulär.</mj-text>',

            emailDepersonalizedNarRetestSubject: 'NAR testar om',
            emailDepersonalizedNarRetestBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

            emailDepersonalizedAas12MonthsSubject: 'AAS frågor',
            emailDepersonalizedAas12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande hos {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Logga in med BankID för att läsa meddelandet och konfirmera din e-mail. Kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailDepersonalizedCpap1MonthSubject: 'CPAP frågor',
            emailDepersonalizedCpap1MonthBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande hos {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Logga in med BankID för att läsa meddelandet och konfirmera din e-mail. Kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailDepersonalizedCpap4MonthsSubject: 'CPAP frågor',
            emailDepersonalizedCpap4MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande hos {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Logga in med BankID för att läsa meddelandet och konfirmera din e-mail. Kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailDepersonalizedCpap12MonthsSubject: 'CPAP frågor',
            emailDepersonalizedCpap12MonthsBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande hos {{careunitName}} portal <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a>. Logga in med BankID för att läsa meddelandet och konfirmera din e-mail. Kontakta oss om du inte har möjlighet att logga in.</mj-text>',

            emailVerificationSubject: 'Mejl verifikation',
            emailVerificationBody:
                '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Din verifieringskod är {{verificationCode}}.</mj-text>',

            postalLayout: asset('postalLayout.sv.html'),

            postalPersonalizedBookingConfirmedSubject: 'Bokningen bekräftades',
            postalPersonalizedBookingConfirmedBody: asset(
                'postalPersonalizedBookingConfirmedBody.sv.html'
            ),

            einboxLayout: asset('einboxLayout.sv.html'),

            einboxPersonalizedBookingConfirmedSubject: 'Bokningen bekräftades',
            einboxPersonalizedBookingConfirmedBody: asset(
                'einboxPersonalizedBookingConfirmedBody.sv.html'
            ),

            processSimpleAppointmentName: 'Skapa möte',
            processSimpleAppointmentDescription: 'Skapa möten',
            taskSimpleAppointmentBookingName: 'Bokning av möten',
            taskInvestigationNarSimpleAppointmentBookingName:
                'Bokning av möten',
            taskInvestigationDoctorVisitSimpleAppointmentBookingName:
                'Bokning av möten',
            taskAasNarFirstSimpleAppointmentBookingName: 'Bokning av möten',
            taskAasNarSecondSimpleAppointmentBookingName: 'Bokning av möten',
            taskCpapVisitSimpleAppointmentBookingName: 'Bokning av möten',
            taskCpapCtpBmaVisitSimpleAppointmentBookingName: 'Bokning av möten',
            taskCpapCtpDoctorVisitSimpleAppointmentBookingName:
                'Bokning av möten',
            taskCpapAnalysisBmaVisitSimpleAppointmentBookingName:
                'Bokning av möten',
            taskCpapAnalysisDoctorVisitSimpleAppointmentBookingName:
                'Bokning av möten',
            taskSimpleAppointmentConfirmationName: 'Bekräftelse av utnämningen',
            taskInvestigationNarSimpleAppointmentConfirmationName:
                'Bekräftelse av utnämningen',
            taskInvestigationDoctorVisitSimpleAppointmentConfirmationName:
                'Bekräftelse av utnämningen',
            taskAasNarFirstSimpleAppointmentConfirmationName:
                'Bekräftelse av utnämningen',
            taskAasNarSecondSimpleAppointmentConfirmationName:
                'Bekräftelse av utnämningen',
            taskCpapVisitSimpleAppointmentConfirmationName:
                'Bekräftelse av utnämningen',
            taskCpapCtpBmaVisitSimpleAppointmentConfirmationName:
                'Bekräftelse av utnämningen',
            taskCpapCtpDoctorVisitSimpleAppointmentConfirmationName:
                'Bekräftelse av utnämningen',
            taskCpapAnalysisBmaVisitSimpleAppointmentConfirmationName:
                'Bekräftelse av utnämningen',
            taskCpapAnalysisDoctorVisitSimpleAppointmentConfirmationName:
                'Bekräftelse av utnämningen',
            taskSimpleAppointmentReminderName: 'Påminnelse om utnämning',
            taskSimpleAppointmentReminderBody: 'Bekräfta en tid?',
            taskSimpleAppointmentCancelationName: 'Avbokning av möten',
            taskSimpleAppointmentReminderTimerName: 'Aktivera påminnelse',
            taskSimpleAppointmentCancelingTimerName: 'Börja avbryta',
            taskSimpleAppointmentCompleteTimerName: 'Komplett möten',
            taskSimpleAppointmentEkopostManualName: 'Postaviseringsbrev',
            taskSimpleAppointmentEkopostManualBody:
                'Skicka postaviseringsbrev?',
            taskSimpleAppointmentEkopostSubprocessName: 'Postaviseringsbrev',

            processDoctorVisitName: 'Läkarbesök',
            processDoctorVisitDescription: 'Läkarbesök',
            taskDoctorVisitBookingName: 'Läkare besök bokning',
            taskDoctorVisitFormFillingName: 'Besök formulärets fyllning',
            taskDoctorVisitFormTransformingName: 'Besök formuläromvandling',
            taskDoctorVisitFormReviewingName: 'Besök formulärgranskning',
            taskDoctorVisitFormSendingName: 'Besök skicka formuläret',
            taskDoctorVisitTomorrowTimerName: 'Informera om besök i morgon',
            taskDoctorVisitTodayTimerName: 'Informera om besök idag',

            processNarName: 'NAR',
            processNarDescription: 'NAR-process',
            taskNarBookingName: 'NAR-bokning',
            taskNarEssFormName: 'ESS-frågeformulär',
            taskNarHandingOutFormName: 'Utdelning av utrustning',
            taskNarSleepFormName: 'Feedbackfyllning',
            taskNarTakingBackFormName: 'Utrustning tar tillbaka',
            taskNarBmaFormFillingName: 'NAR-resultat fyller för BMA',
            taskNarBmaFormTransformingName:
                'NAR-resultat transformeras för BMA',
            taskNarBmaFormReviewingName: 'NAR-resultat granskade för BMA',
            taskNarBmaFormSendingName: 'NAR-resultat skickas för BMA',
            taskNarDoctorFormFillingName: 'NAR-resultat fylls för läkare',
            taskNarDoctorFormTransformingName:
                'NAR-resultat förvandlas för läkare',
            taskNarDoctorFormReviewingName:
                'NAR-resultat granskning för läkare',
            taskNarDoctorFormSendingName: 'NAR-resultat skickas till läkare',
            taskNarEssFormTimerName:
                'Påminn om att fylla i ESS-patientformulär',
            taskNarTakingBackTimerName: 'Påminn om att ta tillbaka utrustning',

            taskNarTomorrowTimerName: 'Informera om besök i morgon',
            taskNarTodayTimerName: 'Informera om besök idag',

            processInvestigationName: 'Undersökning',
            processInvestigationDescription:
                'Utredningsprocess (SHC avsnitt 1)',
            taskInvestigationRefDetailsFormName: 'Fyll i referensinformation',
            taskInvestigationNarName: 'NAR',
            taskInvestigationRefReplyName: 'Referens svar',
            taskInvestigationRefReplyBody: 'Vänligen meddela svaret',
            taskInvestigationTreatmentPlanName: 'Behandlingsplan',
            taskInvestigationTreatmentPlanBody: 'Vad händer nu?',
            taskInvestigationDoctorVisitName: 'Klinisk bedömning',
            taskInvestigationSesarFormName: 'SESAR-rapport fyller',
            taskInvestigationCountyReportName: 'Länsrapport',
            taskInvestigationCountyReportBody: 'Länsrapport',

            processAasName: 'AAS',
            processAasDescription: 'AAS-process (SHC avsnitt 2)',
            taskAasRefDentistFormName: 'Hänvisning till fyllning av tandläkare',
            taskAasDentistFormFillingName: 'Svar från tandläkarens fyllning',
            taskAasCpapTreatmentName: 'CPAP-behandling?',
            taskAasCpapTreatmentBody: 'CPAP-behandling?',
            taskAasDentistFormTransformingName: 'Tandläkare formomvandling',
            taskAasDentistFormReviewingName: 'Tandläkare form granskning',
            taskAasDentistFormSendingName:
                'Automatisk tandläkarformulär som skickas till Take Care',
            taskAasFollowUp7WeeksTimerName: 'Väntar i 7 veckor',
            taskAasFollowUp12MonthsTimerName: 'Väntar i 12 månader',
            taskAasProceedName: 'Fortsätt med patienten',
            taskAasProceedBody: 'Fortsätt med patienten',
            taskAasPatientAlertFormName: 'AAS-problemrapport',
            taskAasPatient12MonthsFormName: 'AAS-frågeformulär 12 månader',
            taskAasQ12MonthsTimerName:
                'Påminnelse om att fylla i AAS 12 månaders patientformulär',
            taskAasSesarFirstFormName: 'SESAR första rapport fyllning',
            taskAasCountyReportName: 'Länsrapport',
            taskAasCountyReportBody: 'Länsrapport',

            taskAasAnalysis7wFormFillingName:
                'AAS användningsanalys efter 7 veckor',
            taskAasAnalysis12mFormFillingName:
                'AAS användningsanalys efter 12 månader',
            taskAasAnalysisAlertFormFillingName:
                'AAS användningsanalys efter problemrapport',
            taskAasAnalysisNarFormFillingName:
                'AAS användningsanalys efter NAR',
            taskAasAnalysis7wFormTransformingName:
                'AAS användningsanalysform transformera',
            taskAasAnalysis12mFormTransformingName:
                'AAS användningsanalysform transformera',
            taskAasAnalysisAlertFormTransformingName:
                'AAS användningsanalysform transformera',
            taskAasAnalysisNarFormTransformingName:
                'AAS användningsanalysform transformera',
            taskAasAnalysis7wFormReviewingName:
                'AAS användningsanalysformulär granskning',
            taskAasAnalysis12mFormReviewingName:
                'AAS användningsanalysformulär granskning',
            taskAasAnalysisAlertFormReviewingName:
                'AAS användningsanalysformulär granskning',
            taskAasAnalysisNarFormReviewingName:
                'AAS användningsanalysformulär granskning',
            taskAasAnalysis7wFormSendingName:
                'Automatisk AAS-användningsanalysformulär skickas till Takecare',
            taskAasAnalysis12mFormSendingName:
                'Automatisk AAS-användningsanalysformulär skickas till Takecare',
            taskAasAnalysisAlertFormSendingName:
                'Automatisk AAS-användningsanalysformulär skickas till Takecare',
            taskAasAnalysisNarFormSendingName:
                'Automatisk AAS-användningsanalysformulär skickas till Takecare',

            taskAasRefAdjustmentFormName: 'Hänvisning till delad justering',
            taskAasSplitAdjustmentFormName:
                'Delad justering: svar från tandläkare',
            taskAasSesarSecondFormName: 'SESAR slutrapport fyllning',
            taskAasNarFirstName: 'NAR',
            taskAasNarSecondName: 'NAR',

            processCpapName: 'CPAP',
            processCpapDescription: 'CPAP-process (SHC avsnitt 3)',
            taskCpapVisitName: 'CPAP-besök',
            taskCpapSesarFirstFormName: 'SESAR första rapport fyllning',
            taskCpapCountyReportName: 'Länsrapport',
            taskCpapCountyReportBody: 'Länsrapport',

            taskCpapCtpWhatNextManualName: 'Vad händer nu?',
            taskCpapCtpWhatNextManualBody: 'Vad händer nu?',

            taskCpapCtpStartFormName: 'Start form av kontrolltestperiod',
            taskCpapCtpStartManualName:
                'Skicka startresultat för kontrolltestperiod till EMR?',
            taskCpapCtpStartManualBody:
                'Skicka startresultat för kontrolltestperiod till EMR?',
            taskCpapCtpStartTransformName:
                'Kontrolltestperiod startformformning',
            taskCpapCtpStartReviewName:
                'Kontrolltestperiod startformulärgranskning',
            taskCpapCtpStartSendName:
                'Kontrolltestperiod startformulär sändning till Takecare',

            taskCpapCtpExtraFormName: 'Extra form av kontrolltestperiod',
            taskCpapCtpExtraManualName:
                'Skicka kontrolltestperiod extra resultat till EMR?',
            taskCpapCtpExtraManualBody:
                'Skicka kontrolltestperiod extra resultat till EMR?',
            taskCpapCtpExtraTransformName:
                'Kontrolltestperiod extra formtransformering',
            taskCpapCtpExtraReviewName:
                'Kontrolltestperiod extra formulärgranskning',
            taskCpapCtpExtraSendName:
                'Kontrolltestperiod extra formulärsändning till Takecare',

            taskCpapFollowUp1WeekTimerName: 'Väntar på en vecka',

            taskCpapFollowUp1MonthTimerName: 'Väntar i en månad',
            taskCpapFollowUp4MonthsTimerName: 'Väntar i 4 månader',
            taskCpapFollowUp12MonthsTimerName: 'Väntar i 12 månader',
            taskCpapAlertName: 'CPAP-övervakningsvarning',
            taskCpapAlertBody: 'Fortsätt med patienten',
            taskCpapPatientProblemFormName: 'CPAP-problemrapport',
            taskCpap1MonthFormName: 'CPAP-enkät 1 månad',
            taskCpap4MonthsFormName: 'CPAP-frågeformulär 4 månader',
            taskCpap12MonthsFormName: 'CPAP-frågeformulär 12 månader',
            taskCpapSesarSecondFormName: 'SESAR andra rapport',

            taskCpapAnalysisWhatNextManualName: 'Vad händer nu?',
            taskCpapAnalysisWhatNextManualBody: 'Vad nästa?',

            taskCpapAnalysis1mFormName: 'CPAP 1 månads analys',
            taskCpapAnalysis1mManualName:
                'Skicka CPAP 1 månads användningsanalysresultat till EMR?',
            taskCpapAnalysis1mManualBody:
                'Skicka CPAP 1 månads användningsanalysresultat till EMR?',
            taskCpapAnalysis1mTransformName:
                'CPAP 1 månad användningsanalys form transformation',
            taskCpapAnalysis1mReviewName:
                'CPAP 1 månads analysanalysformulär granskning',
            taskCpapAnalysis1mSendName:
                'CPAP 1 månad användningsanalysformulär skickas till Takecare',

            taskCpapAnalysis4mFormName: 'CPAP 4-månadersanalys',
            taskCpapAnalysis4mManualName:
                'Skicka CPAP 4 månaders användningsanalysresultat till EMR?',
            taskCpapAnalysis4mManualBody:
                'Skicka CPAP 4 månaders användningsanalysresultat till EMR?',
            taskCpapAnalysis4mTransformName:
                'CPAP 4 månaders användningsanalysform transformering',
            taskCpapAnalysis4mReviewName:
                'CPAP 4 månaders analys av analysanalysformulär',
            taskCpapAnalysis4mSendName:
                'CPAP 4 månaders analysanalysformulär skickas till Takecare',

            taskCpapAnalysis12mFormName: 'CPAP 12-månadersanalys',
            taskCpapAnalysis12mManualName:
                'Skicka CPAP 12 månaders användningsanalysresultat till EMR?',
            taskCpapAnalysis12mManualBody:
                'Skicka CPAP 12 månaders användningsanalysresultat till EMR?',
            taskCpapAnalysis12mTransformName:
                'CPAP 12 månaders användningsanalysform transformering',
            taskCpapAnalysis12mReviewName:
                'CPAP 12 månaders analys av analysanalysformulär',
            taskCpapAnalysis12mSendName:
                'CPAP 12 månaders analysanalysformulär skickas till Takecare',

            taskCpapAnalysisAlertFormName: 'CPAP alert usage analysis',
            taskCpapAnalysisAlertManualName:
                'Skicka CPAP-varningsanalysresultat till EMR?',
            taskCpapAnalysisAlertManualBody:
                'Skicka CPAP-varningsanalysresultat till EMR?',
            taskCpapAnalysisAlertTransformName:
                'CPAP alert use analysis form transformation',
            taskCpapAnalysisAlertReviewName:
                'CPAP alert analys analys formulär granskning',
            taskCpapAnalysisAlertSendName:
                'CPAP alertanalysformulär skickas till Takecare',

            taskCpapAnalysisProblemFormName: 'CPAP patientanalysanalys',
            taskCpapAnalysisProblemManualName:
                'Skicka CPAP patientanvändningsanalysresultat till EMR?',
            taskCpapAnalysisProblemManualBody:
                'Skicka CPAP-patientanvändningsanalysresultat till EMR?',
            taskCpapAnalysisProblemTransformName:
                'CPAP patientanvändning analysanalys form transformation',
            taskCpapAnalysisProblemReviewName:
                'CPAP patientanvändning analysanalys formulär granskning',
            taskCpapAnalysisProblemSendName:
                'CPAP patientanvändningsanalysformulär skickas till Takecare',

            taskCpapAnalysisFollowFormName: 'CPAP-uppföljningsanalys',
            taskCpapAnalysisFollowManualName:
                'Skicka CPAP-resultat för uppföljningsanalys till EMR?',
            taskCpapAnalysisFollowManualBody:
                'Skicka CPAP-uppföljningsanalysresultat till EMR?',
            taskCpapAnalysisFollowTransformName:
                'CPAP uppföljning av användningsanalysformtransformering',
            taskCpapAnalysisFollowReviewName:
                'CPAP uppföljning av analysanalys för formulärgranskning',
            taskCpapAnalysisFollowSendName:
                'CPAP-uppföljningsanalysformulär skickas till Takecare',

            taskCpapSesarThirdFormName: 'SESAR slutrapport fyllning',
            taskCpapCtpBmaVisitName: 'BMA-besök',
            taskCpapCtpDoctorVisitName: 'Läkarbesök',
            taskCpapAnalysisBmaVisitName: 'BMA-besök',
            taskCpapAnalysisDoctorVisitName: 'Läkarbesök',

            taskCpapQ1MonthTimerName:
                'Påminnelse om att fylla i CPAP 1 månad patientformulär',
            taskCpapQ4MonthsTimerName:
                'Påminnelse om att fylla i CPAP 4 månaders patientformulär',
            taskCpapQ12MonthsTimerName:
                'Påminnelse om att fylla i CPAP 12 månaders patientformulär',
            taskCpapFollowUpTimerName:
                'Väntar på att aktivera analys CPAP-användningsformulär',

            taskCpapVisitFormFillingName: 'Fyll i CPAP-startformuläret',
            taskCpapCtpBmaVisitFormFillingName: 'Fyll i CPAP BMA-formulär',
            taskCpapCtpDoctorVisitFormFillingName: 'Fyll i CPAP-läkareformulär',
            taskCpapAnalysisBmaVisitFormFillingName: 'Fyll i CPAP BMA-formulär',
            taskCpapAnalysisDoctorVisitFormFillingName:
                'Fyll i CPAP-läkareformulär',

            taskCpapVisitFormReviewingName:
                'Granskning CPAP start besöksformulär',
            taskCpapCtpBmaVisitFormReviewingName:
                'Granskning CPAP BMA  besöksformulär',
            taskCpapCtpDoctorVisitFormReviewingName:
                'Granskning CPAP läkare  besöksformulär',
            taskCpapAnalysisBmaVisitFormReviewingName:
                'Granskning CPAP BMA  besöksformulär',
            taskCpapAnalysisDoctorVisitFormReviewingName:
                'Granskning CPAP läkare  besöksformulär',

            processPatientAppointmentName: 'Skapa möte',
            processPatientAppointmentDescription: 'Skapa möten',
            taskPatientAppointmentBookingName: 'Bokning av möten',
            taskNurseAppointmentBookingName: 'Bokning av möten',
            taskPatientAppointmentConfirmationName:
                'Omställning av utnämningen',
            taskNurseAppointmentConfirmationName: 'Omställning av utnämningen',
            taskDoctorSimpleAppointmentBookingName: 'Bokning av möten',
            taskDoctorSimpleAppointmentConfirmationName:
                'Tillsammans bekräftelse',

            processDoctorAppointmentName: 'Skapa möte',
            processDoctorAppointmentDescription: 'Skapa möte',
            taskDoctorAppointmentBookingName: 'Bokning av möten',
            taskDoctorAppointmentReschedulingName: 'Omställning av utnämningen',
            taskDoctorAppointmentCancelingName: 'Avbryter möte av patient',

            processCaMainName: 'Halsokontroll',
            processCaMainDescription: 'Halsokontroll',
            taskCaMainFirstBulletinName: 'Create first patient bulletin',
            taskCaMainSecondBulletinName: 'Create second patient bulletin',
            taskCaMainNurseAppointmentName: 'Nurse visit utnämning',
            taskCaMainNurseFirstTimerName: 'Nurse visit first timer',
            taskCaMainNurseSecondTimerName: 'Nurse visit second timer',
            taskCaMainHealthRefFormName: 'Patientdata för sjuksköterskebesöket',
            taskCaMainHealthDeclarationFormName:
                'Patientdata för sjuksköterskebesöket',
            taskCaMainHealthDeklarationTransformName:
                'Konvertering av patientdata',
            taskCaMainHealthDeclarationReviewName: 'Granskning av patientdata',
            taskCaMainHealthDeclarationSendName: 'Skicka till EMR-patientdata',
            taskCaMainNurseAckManualName:
                'Bekräftelse av patientdata (sjuksköterskebesök)',
            taskCaMainNurseAckManualBody:
                'Bekräftelse av patientdata (sjuksköterskebesök)',
            taskCaMainDoctorAppointmentName: 'Doktorbesök',
            taskCaMainDoctorFirstTimerName: 'Doctor visit timer',
            taskCaMainDoctorAckManualName:
                'Bekräftelse av patientdata (läkarbesök)',
            taskCaMainDoctorAckManualBody:
                'Bekräftelse av patientdata (läkarbesök)',

            processShcFollowUpName: 'Uppföljning',
            processShcFollowUpDescription: 'Uppföljningsprocess',
            taskShcFollowUpReqVisitFormName: 'Be om besök',
            taskShcFollowUpAnalysisFormName: 'Uppföljningsanalys',
            taskShcFollowUpAnalysisManualName: 'Journalanteckningar',
            taskShcFollowUpAnalysisManualBody:
                'Vill du skicka anteckningar för dagböcker?',
            taskShcFollowUpAnalysisTransformName:
                'Konvertera journalnoteringar',
            taskShcFollowUpAnalysisReviewName: 'Granskning av anteckningar',
            taskShcFollowUpAnalysisSendName: 'Skicka anteckningar',
            taskShcFollowUpDentistManualName: 'Hänvisning till tandläkare',
            taskShcFollowUpDentistManualBody: 'Hänvisning till tandläkare',
            taskShcFollowUpSendCardManualName:
                'Behandla kortet och skicka tillbaka',
            taskShcFollowUpSendCardManualBody:
                'Behandla kortet och skicka tillbaka',
            taskShcFollowUpNurseVisitSubprocessName: 'Boka sjuksköterska besök',
            taskShcFollowUpDoctorVisitSubprocessName: 'Boka läkarbesök',
            taskShcFollowUpDropInVisitSubprocessName: 'Släpp in besök',
            taskShcFollowUpCountyReportManualName: 'Länsrapport',
            taskShcFollowUpCountyReportManualBody: 'Länsrapport',
            taskShcFollowUpSesarFormName: 'SESAR-rapport',

            processEkopostName: 'Skicka ett postbrev',
            processEkopostDescription: 'Skicka ett postbrevprocess',
            taskEkopostEinboxName: 'Letar efter e-inkorg',
            taskEkopostEinboxErrorName: 'E-inkorg fel',
            taskEkopostEinboxErrorBody: 'Ska vi försöka igen?',
            taskEkopostSparName: 'Söker adress i SPAR',
            taskEkopostSparErrorName: 'SPAR-fel',
            taskEkopostSparErrorBody: 'Ska vi försöka igen?',
            taskEkopostEinboxPdfGeneratingName: 'Förbereder en PDF',
            taskEkopostEinboxPdfReviewingName: 'Godkänner en PDF',
            taskEkopostPostalPdfGeneratingName: 'Förbereder en PDF',
            taskEkopostPostalPdfReviewingName: 'Godkänner en PDF',
            taskEkopostPdfSendingName: 'Skickar ett postbrev',
            taskEkopostPdfSendingErrorName: 'Skickade fel',
            taskEkopostPdfSendingErrorBody: 'Ska vi försöka igen?',

            httpErrorTooManyEmailVerificationAttempts:
                'too many email verification attempts',
            httpErrorTooManyEmailVerificationRequests:
                'too many email verification requests',
            httpErrorTooManySmsVerificationAttempts:
                'too many sms verification attempts',
            httpErrorTooManySmsVerificationRequests:
                'too many sms verification requests',
            httpErrorTenantDataIsAbsent: 'tenant data is absent',
            httpErrorTenantDataMismatch: 'tenant data mismatch',
            httpErrorIncorrectToken: 'incorrect token',
            httpErrorInsufficientPermissions: 'insufficient permissions',
            httpErrorMaintenance: 'maintenance',
            httpErrorSchemaValidationError: 'schema validation error',
            httpErrorCareunitInconsistent: 'careunit inconsistent',
            httpErrorCareprofInconsistent: 'careprof inconsistent',
            httpErrorCanNotFindComar: 'can not find comar',
            httpErrorCanNotFindStatical: 'can not find statical',
            httpErrorStaticalCodeExists: 'statical code exists',
            httpErrorCanNotFindTemplate: 'can not find template',
            httpErrorTemplateCodeExists: 'template code exists',
            httpErrorCanNotFindMapping: 'can not find mapping',
            httpErrorCanNotFindMappingById: 'can not find mapping by id',
            httpErrorMappingCodeExists: 'mapping code exists',
            httpErrorCanNotFindReport: 'can not find report',
            httpErrorCanNotDeleteReport: 'can not delete report',
            httpErrorCanNotFindTemplateMetadata:
                'can not find template metadata',
            httpErrorTemplateDataAbsent: 'template data absent',
            httpErrorResourceFilesAreMissed: 'resource files are missed',
            httpErrorCanNotFindTemplateToUpdate:
                'can not find template to update',
            httpErrorCanNotFindTemplateToPatch:
                'can not find template to patch',
            httpErrorCanNotFindTemplateToDelete:
                'can not find template to delete',
            httpErrorIncorrectTenantOrCredentials:
                'incorrect tenant or credentials',
            httpErrorIncorrectCredentials: 'incorrect credentials',
            httpErrorWrongUserType: 'wrong user type',
            httpErrorIncorrectTenant: 'incorrect tenant',
            httpErrorGrandIdUsernameMissing: 'username missing',
            httpErrorCanNotFindArtefact: 'can not find artefact',
            httpErrorCanNotUpdateArtefactState: 'can not update artefact state',
            httpErrorPdfIsMissingOrCorrupted: 'pdf is missing or corrupted',
            httpErrorCanNotFindProcessInstance: 'can not find process instance',
            httpErrorCanNotFindTaskInstance: 'can not find task instance',
            httpErrorCanNotFindCareprof: 'can not find careprof',
            httpErrorCareprofNotExists: 'careprof not exists',
            httpErrorCareprofUsernameExists: 'careprof username exists',
            httpErrorCareprofPersonalNumberExists:
                'careprof personal number exists',
            httpErrorCareprofHsaidExists: 'careprof hsaid exists',
            httpErrorPasswordAuthNotAllowed: 'password auth not allowed',
            httpErrorLabelNameAlreadyExists: 'label name already exists',
            httpErrorCanNotFindLabel: 'can not find label',
            httpErrorCanNotFindCareunit: 'can not find careunit',
            httpErrorCareunitCodeExists: 'careunit code exists',
            httpErrorCareunitHsaidExists: 'careunit hsaid exists',
            httpErrorCareunitNotExists: 'careunit not exists',
            httpErrorCanNotFindPatient: 'can not find patient',
            httpErrorPatientPersonalNumberExists:
                'patient personal number exists',
            httpErrorInvalidEmailVerificationCode:
                'invalid email verification code',
            httpErrorInvalidSmsVerificationCode:
                'invalid sms verification code',
            httpErrorPatientNotExists: 'patient not exists',
            httpErrorLabelIdAlreadyAdded: 'label id already added',
            httpErrorCanNotFindProcessConfig: 'can not find process config',
            httpErrorCorrespondingProcessConfigExists:
                'corresponding process config exists',
            httpErrorPsdKeyExists: 'psd key exists',
            httpErrorPsdMetaDoesNotExists: 'psd meta does not exists',
            httpErrorPsdKeyCanNotBeChanged: 'psd key can not be changed',
            httpErrorCanNotFindItem: 'can not find item',
            httpErrorCanNotFindPsdMeta: 'can not find psd meta',
            httpErrorIncorrectDataValueType: 'incorrect data value type',
            httpErrorInconsistentCareunitCode: 'inconsistent careunit code',
            httpErrorCanNotFindMicroservice: 'can not find microservice',
            httpErrorBaseMsCanNotHaveTasks: 'base ms can not have tasks',
            httpErrorProcessMsShoudHaveTasks: 'process ms shoud have tasks',
            httpErrorMsidExists: 'msid exists',
            httpErrorCanNotFindTenantAdmin: 'can not find tenant admin',
            httpErrorTenantDoesNotExists: 'tenant does not exists',
            httpErrorAdminUsernameExists: 'admin username exists',
            httpErrorAdminUsernameCouldNotBeChanged:
                'admin username could not be changed',
            httpErrorCanNotFindAdmin: 'can not find admin',
            httpErrorCanNotFindTenant: 'can not find tenant',
            httpErrorTenantCodeExists: 'tenant code exists',
            httpErrorSomeMsDoesNotExists: 'some ms does not exists',
            httpErrorItIsNotYourProcessInstance:
                'it is not your process instance',
            httpErrorProcessInstanceIsNotActive:
                'process instance is not active',
            httpErrorTaskInstanceIsNotActive: 'task instance is not active',
            httpErrorPatientDataAbsent: 'patient data absent',
            httpErrorCareunitDataAbsent: 'careunit data absent',
            httpErrorTenantDataAbsent: 'tenant data absent',
            httpErrorCanNotFindCareunitProcessConfig:
                'can not find careunit process config',
            httpErrorIncorrectProcessConfig: 'incorrect process config',
            httpErrorProcessIsNotActive: 'process is not active',
            httpErrorProcessIsNotStandalone: 'process is not standalone',
            httpErrorForbiddenTemplateCode: 'forbidden template code',
            httpErrorTemplateChargingIsAbsent: 'template charging is absent',
            httpErrorAssessmentIsAlreadyCreated:
                'assessment is already created',
            httpErrorIncorrectPatient: 'incorrect patient',
            httpErrorAssessmentIsNotCreated: 'assessment is not created',
            httpErrorTemplateCodeCanNotBeChanged:
                'template code can not be changed',
            httpErrorBookingIsAlreadyCreated: 'booking is already created',
            httpErrorCareunitAlreadyUnlinked: 'Careunit already Unlinked',
            httpErrorCareunitAlreadyLinked: 'Careunit already linked',
            httpErrorSlotIsNotAvailable: 'slot is not available',
            httpErrorCanNotFindCorrespondingBooking:
                'can not find corresponding booking',
            httpErrorBulletinIsNotCreated: 'bulletin is not created',
            httpErrorBulletinIsAlreadyCreated: 'bulletin is already created',
            httpErrorIncorrectCompleteOption: 'incorrect complete option',
            httpErrorCanNotFindInnerConfigOfTask:
                'can not find inner config of task',
            httpErrorTaskDataIsNotCreated: 'task data is not created',
            httpErrorMedicationsIsNotSavedLocally:
                'medications is not saved locally',
            httpErrorMiniqFullResultIsNotSaved:
                'miniq full result is not saved',
            httpErrorMiniqFullResultIsNotFound:
                'miniq full result is not found',
            httpErrorPdfIsNotCreated: 'pdf is not created',
            httpErrorTakecareDataIsAbsent: 'takecare data is absent',
            httpErrorTakecareDocIsNotCreated: 'takecare doc is not created',
            httpErrorListOfTermsCanNotBeEmpty: 'list of terms can not be empty',
            httpErrorUnexpecteDatabaseError: 'unexpecte database error',
            httpErrorEmrRequestTimeout: 'emr request timeout',
            httpErrorUnexpectedTakecareResponse: 'unexpected takecare response',
            httpErrorUnexpectedError: 'unexpected error',
            httpErrorCanNotFindPatientInCareunit:
                'Can not find patient in careunit'
        },
        tenant1: {}
    }
};