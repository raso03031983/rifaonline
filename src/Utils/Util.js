function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

function formatDatePTBR(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
}

function carrega_UF() {
  const resp = [
    {
      id: "AC",
      desc: "AC",
    },
    {
      id: "AL",
      desc: "AL",
    },
    {
      idSub: "AP",
      desc: "AP",
    },
    {
      id: "AM",
      desc: "AM",
    },
    {
      idSub: "BA",
      desc: "BA",
    },
    {
      id: "CE",
      desc: "CE",
    },
    {
      idSub: "DF",
      desc: "",
    },
    {
      id: "ES",
      desc: "ES",
    },
    {
      idSub: "GO",
      desc: "GO",
    },
    {
      id: "MA",
      desc: "MA",
    },
    {
      idSub: "MT",
      desc: "MT",
    },
    {
      id: "MS",
      desc: "MS",
    },
    {
      idSub: "MG",
      desc: "MG",
    },
    {
      id: "PA",
      desc: "PA",
    },
    {
      idSub: "PB",
      desc: "PB",
    },
    {
      id: "PR",
      desc: "PR",
    },
    {
      idSub: "PE",
      desc: "PE",
    },
    {
      id: "PI",
      desc: "PI",
    },
    {
      idSub: "RJ",
      desc: "RJ",
    },
    {
      id: "RN",
      desc: "RN",
    },
    {
      idSub: "RS",
      desc: "RS",
    },
    {
      id: "RO",
      desc: "RO",
    },
    {
      idSub: "RR",
      desc: "RR",
    },
    {
      id: "SC",
      desc: "SC",
    },
    {
      idSub: "SP",
      desc: "SP",
    },
    {
      id: "SE",
      desc: "SE",
    },
    {
      idSub: "TO",
      desc: "TO",
    },
  ];

  return resp;
}

export default {
  formatDatePTBR,
  carrega_UF,
  formatDate,
};
