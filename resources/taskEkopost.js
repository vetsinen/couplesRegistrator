const {register, sentenceCase} = require('./lib')

register({
    languages: ['en'],
    prefix: 'taskEkopost',
    namespaces: ['default'],
    pipe: (el) => sentenceCase(el),
    keys: {
        EinboxName: 'Looking for e-inbox',
        ErrorName: 'E-inbox error',
        EinboxErrorBody: 'Should we retry?',
        SparName: 'Looking for address in SPAR',
        SparErrorName: 'SPAR error',
        SparErrorBody: 'Should we retry?',
        EinboxPdfGeneratingName: 'Preparing a PDF',
        EinboxPdfReviewingName: 'Approving a PDF',
        PostalPdfGeneratingName: 'Preparing a PDF',
        PostalPdfReviewingName: 'Approving a PDF',
        PdfSendingName: 'Sending a postal letter',
        PdfSendingErrorName: 'Sending error',
        PdfSendingErrorBody: 'Should we retry?',
    }
})

register({
    languages: ['sv'],
    prefix: '',
    namespaces: ['default'],
    pipe: (el)=>sentenceCase(el),
    keys:  {
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
    },
})

