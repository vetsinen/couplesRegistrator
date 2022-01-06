const {register} = require('./lib')

register({
    languages: ['en'],
    namespaces: ['default'],
    keys: {
        termsAndConditions: '',

        smsPersanolizedNurseBookingConfirmedCA:
            'You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
        smsPersanolizedNurseBookingConfirmedCAName:
            'Nurse booking confirmed',
        smsDepersonalizedNurseBookingConfirmedCA:
            'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
        smsDepersonalizedNurseBookingConfirmedCAName:
            'Nurse booking confirmed',

        smsPersanolizedDoctorBookingConfirmedCA:
            'You have a time booked at {{careunitName}} on {{visitDate}} at {{visitStartTime}} - {{visitEndTime}}. For more information, see {{marketingUrl}}.',
        smsPersanolizedDoctorBookingConfirmedCAName:
            'Doctor booking confirmed',
        smsDepersonalizedDoctorBookingConfirmedCA:
            'You have received a message from {{careunitName}}. Please log in to {{appUrl}} to confirm your mobile number and read the message. For more information, please see {{marketingUrl}}.',
        smsDepersonalizedDoctorBookingConfirmedCAName:
            'Doctor booking confirmed',

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
    },
})