interface Nave {
    nomeNave: string;
    piloto: string;
    limiteTripulacao: number;
    tripulacao: string[];
    emMissao: boolean;
  }
  
  let naves: Nave[] = [];
  
  function criarNave(nave: Nave): void {
    naves.push(nave);
  }
  
  const novaNave: Nave = {
    nomeNave: "Nave Espacial 1",
    piloto: "João da Silva",
    limiteTripulacao: 10,
    tripulacao: ["João da Silva", "Maria Oliveira"],
    emMissao: false
  };
  
  criarNave(novaNave);
  