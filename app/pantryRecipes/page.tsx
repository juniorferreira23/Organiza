// components/FinanceForm.tsx
"use client";

import { useState, FormEvent } from "react";

const FinanceForm: React.FC = () => {
  const [type, setType] = useState<string>("income");
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://sua-api.com/finances", { // Substitua pela URL da sua API
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, category, amount: parseFloat(amount as string), description, date }),
    });

    if (response.ok) {
      alert("Registro salvo com sucesso!");
    } else {
      alert("Erro ao salvar registro.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Tipo:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
      </select>

      <label>Categoria:</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <label>Valor:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <label>Descrição:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label>Data:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button type="submit">Salvar</button>
    </form>
  );
}

export default FinanceForm;
