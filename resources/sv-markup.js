const {register, sentenceCase} = require('./lib')
const {asset} = require('../tools')

register({
    languages: ['sv'],
    prefix: '',
    namespaces: ['default'],
    pipe: (el) => (el),
    keys: {
        emailPersonalizedNurseBookingConfirmedCASubject:
            'Bokningen bekräftades',
        emailPersonalizedNurseBookingConfirmedCABody:
            '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
        emailDepersonalizedNurseBookingConfirmedCASubject:
            'Bokningen bekräftades',
        emailDepersonalizedNurseBookingConfirmedCABody:
            '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

        emailPersonalizedDoctorBookingConfirmedCASubject:
            'Bokningen bekräftades',
        emailPersonalizedDoctorBookingConfirmedCABody:
            '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har en tid bokad hos {{careunitName}} den {{visitDate}} kl {{visitStartTime}} - {{visitEndTime}}.</mj-text>',
        emailDepersonalizedDoctorBookingConfirmedCASubject:
            'Bokningen bekräftades',
        emailDepersonalizedDoctorBookingConfirmedCABody:
            '<mj-text mj-class="title" padding-top="16px" padding-bottom="24px">Du har fått ett meddelande av {{careunitName}}. Vänligen logga in på <a style="color:#0052CC" href="{{appUrl}}">{{appUrl}}</a> för att konfirmera ditt mobilnummer och läsa meddelandet.</mj-text>',

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
    },
})