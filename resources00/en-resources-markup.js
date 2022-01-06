const { asset } = require('../tools');

module.exports = {
    emailPersonalizedNurseBookingConfirmedCASubject:
        'Booking was confirmed',
    emailPersonalizedNurseBookingConfirmedCABody:
        '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
    emailDepersonalizedNurseBookingConfirmedCASubject:
        'Booking was confirmed',
    emailDepersonalizedNurseBookingConfirmedCABody:
        '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',
    emailPersonalizedDoctorBookingConfirmedCASubject:
        'Booking was confirmed',
    emailPersonalizedDoctorBookingConfirmedCABody:
        '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
    emailDepersonalizedDoctorBookingConfirmedCASubject:
        'Booking was confirmed',
    emailDepersonalizedDoctorBookingConfirmedCABody:
        '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">You have received a message from {{careunitName}}. Please log in to <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> to confirm your mobile number and read the message.</mj-text>',
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
}