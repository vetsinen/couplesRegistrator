const LocalizedMessages = require('./LocalizedMessages')

class SvTaskEkopost extends LocalizedMessages {
    constructor() {
        super();
        this.setPrefixedPairs();
    }

    prefix = 'taskEkopost';
    prefixlessManualTranslations = {
        EinboxName: 'Letar efter e-inkorg',
        EinboxErrorName: 'E-inkorg fel',
        EinboxErrorBody: 'Ska vi försöka igen?',
        SparName: 'Söker adress i SPAR',
        SparErrorName: 'SPAR-fel',
        SparErrorBody: 'Ska vi försöka igen?',
        EinboxPdfGeneratingName: 'Förbereder en PDF',
        EinboxPdfReviewingName: 'Godkänner en PDF',
        PostalPdfGeneratingName: 'Förbereder en PDF',
        PostalPdfReviewingName: 'Godkänner en PDF',
        PdfSendingName: 'Skickar ett postbrev',
        PdfSendingErrorName: 'Skickade fel',
        PdfSendingErrorBody: 'Ska vi försöka igen?',
    }
}

module.exports = SvTaskEkopost