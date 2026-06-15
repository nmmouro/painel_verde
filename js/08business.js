function getPainelRows(results){

  const painelIndex =
    TABS.findIndex(t => t === "LANÇAMENTOS");

  return (results[painelIndex].table.rows || [])
    .filter(row => {

      const v =
        (row.c || []).map(getCell);

      const status =
        String(v[6] || "")
          .toUpperCase()
          .trim();

      return (
        status.includes("AGENDADO") ||
        status.includes("EM ANDAMENTO") ||
        status.includes("VIAGEM") ||
        status.includes("MANUTENCAO")
      );
    });
}
