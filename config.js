export const CONFIG = {
  SHEET_ID: "14T7zF0likp8YGeycOYBcOs9INY9gvMzpt7SMfghE8P4",

  TABS: [
    {
      id: "veiculos",
      title: "VEÍCULOS",
      sheet: "VEÍCULOS",
      query: "select B,V,M,N"
    },
    {
      id: "motoristas",
      title: "MOTORISTAS",
      sheet: "MOTORISTAS",
      query: "select A,B,C"
    },
    {
      id: "painel",
      title: "PAINEL",
      sheet: "LANÇAMENTOS",
      query: "select B,C,D,E,F,G,X"
    },
    {
      id: "agenda",
      title: "AGENDA DO DIA",
      sheet: "AGENDA DO DIA",
      query: "select B,C,D,E,F,G,H"
    },
    {
      id: "social",
      title: "SERVIÇO SOCIAL",
      sheet: "AGENDA SERVIÇO SOCIAL",
      query: "select B,C,D,F,G,H"
    }
  ]
};
