import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        halko: 1,
        uploadedData: null,
        sampleInput: [{
            "date": "2018-06-01",
            "description": "PRZELEW ZEWNĘTRZNY PRZYCHODZĄCY\nSTAROŃ SZYMON ŚRUTARSKA 20\n43-400 CIESZYN\n82105010831000009099619919\nMakulec",
            "ammount": "8,00"
        }, {
            "date": "2018-06-01",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nMPAY *ZASILENIE_M/WARSZAWA DATA TRANSAKCJI: 2018-05-30",
            "ammount": "-2,80"
        }, {
            "date": "2018-06-02",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nU SZWAGRA /KRAKOW DATA TRANSAKCJI: 2018-05-31",
            "ammount": "-16,00"
        }, {
            "date": "2018-06-02",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-01",
            "ammount": "-4,78"
        }, {
            "date": "2018-06-02",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nLood Is Good sp. z /Krakow DATA TRANSAKCJI: 2018-06-01",
            "ammount": "-4,00"
        }, {
            "date": "2018-06-02",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nSQUASH 4 YOU /KRAKOW DATA TRANSAKCJI: 2018-06-01",
            "ammount": "-7,50"
        }, {
            "date": "2018-06-03",
            "description": "PRZELEW MTRANSFER WYCHODZACY\nPAYPRO\nUL.KANCLERSKA 15 60-327 POZNAŃ POLSKA\n73114020040000360275557810\nP24-W28-667-026 ARS.PL",
            "ammount": "-41,00"
        }, {
            "date": "2018-06-03",
            "description": "PRZELEW MTRANSFER WYCHODZACY\nPAYU SPÓŁKA AKCYJNA\nUL.GRUNWALDZKA 182 60-166 POZNAŃ POLSKA\n35114020040000310274693693\nPAYU XX1109948418XX WAVELO",
            "ammount": "-16,00"
        }, {
            "date": "2018-06-04",
            "description": "PRZELEW ZEWNĘTRZNY PRZYCHODZĄCY\nZAPRZALSKI JACEK ZMIENNICA 264\n36-200 BRZOZÓW\n57116022020000000333924412\nHajs, hajs, hajs",
            "ammount": "10,00"
        }, {
            "date": "2018-06-04",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nPAULAXHAIR /Krakow DATA TRANSAKCJI: 2018-06-02",
            "ammount": "-31,00"
        }, {
            "date": "2018-06-04",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFHU DAC NGUYEN /KRAKOW DATA TRANSAKCJI: 2018-06-02",
            "ammount": "-19,90"
        }, {
            "date": "2018-06-04",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nCAKESTER CAFE /KRAKOW DATA TRANSAKCJI: 2018-06-03",
            "ammount": "-10,00"
        }, {
            "date": "2018-06-04",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nNICE ICE SP. Z O.O./Krakow DATA TRANSAKCJI: 2018-06-03",
            "ammount": "-7,00"
        }, {
            "date": "2018-06-04",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nAmazon web services/aws.amazon DATA TRANSAKCJI: 2018-06-03",
            "ammount": "-2,36"
        }, {
            "date": "2018-06-05",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-04",
            "ammount": "-1,59"
        }, {
            "date": "2018-06-05",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-04",
            "ammount": "-2,29"
        }, {
            "date": "2018-06-05",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nLUPINKA /Krakow DATA TRANSAKCJI: 2018-06-04",
            "ammount": "-6,50"
        }, {
            "date": "2018-06-06",
            "description": "PRZELEW ZEWNĘTRZNY PRZYCHODZĄCY\nGÓRNIK JULIA KRÓLOWEJ JADWIGI 1\\53\n42-500 BĘDZIN\n85105012271000009211431664\nnetflix",
            "ammount": "13,00"
        }, {
            "date": "2018-06-06",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nNETFLIX.COM /Amsterdam DATA TRANSAKCJI: 2018-06-06",
            "ammount": "-52,00"
        }, {
            "date": "2018-06-06",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-05",
            "ammount": "-5,08"
        }, {
            "date": "2018-06-07",
            "description": "PRZELEW ZEWNĘTRZNY PRZYCHODZĄCY\nPATRYK PARYŁO UL.ZDROJOWA 38\n33-330 GRYBÓW\n50102055581111185570600053\nNETFLIX AND CHILL",
            "ammount": "13,00"
        }, {
            "date": "2018-06-07",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nRestauracja Docent /Krakow DATA TRANSAKCJI: 2018-06-06",
            "ammount": "-15,00"
        }, {
            "date": "2018-06-07",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nLood Is Good sp. z /Krakow DATA TRANSAKCJI: 2018-06-06",
            "ammount": "-4,00"
        }, {
            "date": "2018-06-08",
            "description": "PRZELEW WEWNĘTRZNY PRZYCHODZĄCY\nKAROL JAKUB ŚWIECA\nUL.KRÓLOWEJ JADWIGI 1 M.57 42-500 BĘDZIN\n94114020040000340275755798\nTRANSFER OF FUNDS",
            "ammount": "18,00"
        }, {
            "date": "2018-06-08",
            "description": "PRZELEW WEWNĘTRZNY PRZYCHODZĄCY\nKAROL JAKUB ŚWIECA\nUL.KRÓLOWEJ JADWIGI 1 M.57 42-500 BĘDZIN\n94114020040000340275755798\nTRANSFER OF FUNDS",
            "ammount": "25,00"
        }, {
            "date": "2018-06-08",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-07",
            "ammount": "-5,08"
        }, {
            "date": "2018-06-08",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-07",
            "ammount": "-2,00"
        }, {
            "date": "2018-06-09",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nNORTH FISH G. Krako/Krakow DATA TRANSAKCJI: 2018-06-08",
            "ammount": "-28,30"
        }, {
            "date": "2018-06-09",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nZABKA Z1437 K.1 /KRAKOW DATA TRANSAKCJI: 2018-06-08",
            "ammount": "-10,97"
        }, {
            "date": "2018-06-09",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nZABKA Z1437 K.1 /KRAKOW DATA TRANSAKCJI: 2018-06-08",
            "ammount": "-14,47"
        }, {
            "date": "2018-06-10",
            "description": "PRZELEW WEWNĘTRZNY PRZYCHODZĄCY\nKAROL JAKUB ŚWIECA\nUL.KRÓLOWEJ JADWIGI 1 M.57 42-500 BĘDZIN\n94114020040000340275755798\nTRANSFER OF FUNDS",
            "ammount": "50,00"
        }, {
            "date": "2018-06-11",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nNICE ICE SP. Z O.O./Krakow DATA TRANSAKCJI: 2018-06-09",
            "ammount": "-4,00"
        }, {
            "date": "2018-06-11",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nCZARNA KROWA /KRAKOW DATA TRANSAKCJI: 2018-06-10",
            "ammount": "-21,00"
        }, {
            "date": "2018-06-12",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nLUPINKA /Krakow DATA TRANSAKCJI: 2018-06-11",
            "ammount": "-6,50"
        }, {
            "date": "2018-06-12",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nRestauracja Docent /Krakow DATA TRANSAKCJI: 2018-06-11",
            "ammount": "-14,50"
        }, {
            "date": "2018-06-12",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-11",
            "ammount": "-5,28"
        }, {
            "date": "2018-06-12",
            "description": "PRZELEW WEWNĘTRZNY PRZYCHODZĄCY\nKAROL JAKUB ŚWIECA\nUL.KRÓLOWEJ JADWIGI 1 M.57 42-500 BĘDZIN\n94114020040000340275755798\nTRANSFER OF FUNDS",
            "ammount": "74,68"
        }, {
            "date": "2018-06-13",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nMY FITNESS PLACE SZ/KRAKOW DATA TRANSAKCJI: 2018-06-12",
            "ammount": "-4,00"
        }, {
            "date": "2018-06-13",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nGOOGLE *Google Play/g.co/helpp DATA TRANSAKCJI: 2018-06-12",
            "ammount": "-28,99"
        }, {
            "date": "2018-06-13",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nMPAY *ZASILENIE_M/WARSZAWA DATA TRANSAKCJI: 2018-06-12",
            "ammount": "-2,80"
        }, {
            "date": "2018-06-13",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-12",
            "ammount": "-2,99"
        }, {
            "date": "2018-06-14",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nAWITEKS SPOLKA Z O./KRAKOW DATA TRANSAKCJI: 2018-06-13",
            "ammount": "-2,80"
        }, {
            "date": "2018-06-14",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-13",
            "ammount": "-4,38"
        }, {
            "date": "2018-06-14",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nZAKLADY MIESNE SZUB/KRAKOW DATA TRANSAKCJI: 2018-06-13",
            "ammount": "-17,61"
        }, {
            "date": "2018-06-14",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-13",
            "ammount": "-3,29"
        }, {
            "date": "2018-06-15",
            "description": "PRZELEW WEWNĘTRZNY PRZYCHODZĄCY\nKAROL JAKUB ŚWIECA\nUL.KRÓLOWEJ JADWIGI 1 M.57 42-500 BĘDZIN\n94114020040000340275755798\nTRANSFER OF FUNDS",
            "ammount": "100,00"
        }, {
            "date": "2018-06-15",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-14",
            "ammount": "-7,17"
        }, {
            "date": "2018-06-15",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-14",
            "ammount": "-2,29"
        }, {
            "date": "2018-06-16",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nLood Is Good sp. z /Krakow DATA TRANSAKCJI: 2018-06-15",
            "ammount": "-4,00"
        }, {
            "date": "2018-06-16",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nGarden Truck /Krakow DATA TRANSAKCJI: 2018-06-15",
            "ammount": "-20,00"
        }, {
            "date": "2018-06-16",
            "description": "ZAKUP PRZY UŻYCIU KARTY\nFRESHMARKET Z8101 K/KRAKOW DATA TRANSAKCJI: 2018-06-15",
            "ammount": "-2,29"
        }]
    },
    mutations: {
        setUploadedData(state, payload) {
            state.uploadedData = payload
        }
    },
    getters: {
        getUploadedData(state) {
            return state.uploadedData
        }
    }
})