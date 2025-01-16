import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./countdown.css";

const Countdown = ({ durationHours, className }) => {
  // Passo 1: Inicializar o estado 'remainingTime' com a duração em segundos.
  const [remainingTime, defineRemainingTime] = useState(
    durationHours * 60 * 60
  );

  // Passo 2: UseEffect para configurar o cronômetro, que diminui o tempo a cada 1 segundo.
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // Passo 3: Atualiza o tempo restante usando a função 'defineRemainingTime'.
      defineRemainingTime((previousTime) => {
        if (previousTime <= 1) {
          // Se o tempo chegar a 0 ou menos, reinicia o cronômetro para 5 horas.
          return durationHours * 60 * 60; // Reinicia para 5 horas em segundos
        }
        // Caso contrário, diminui o tempo restante em 1 segundo.
        return previousTime - 1;
      });
    }, 1000); // A cada 1000ms (1 segundo), o cronômetro será decrementado.

    // Passo 4: Função de limpeza para garantir que o intervalo seja removido quando o componente for desmontado.
    return () => clearInterval(countdownInterval);
  }, [durationHours]); // O array de dependências inclui 'durationHours' para garantir que a duração seja válida

  // Passo 5: Função para formatar o tempo restante no formato "hh:mm:ss".
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600); // Calcula as horas restantes (1 hora = 3600 segundos)
    const minutes = Math.floor((time % 3600) / 60); // Calcula os minutos restantes após subtrair as horas
    const seconds = time % 60; // Calcula os segundos restantes após subtrair horas e minutos
    // Retorna o tempo formatado como "hh:mm:ss"
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  // Passo 6: Renderiza o componente Countdown com o tempo restante ou a mensagem "Tempo Esgotado!".
  return (
    <div className={`countdown ${className}`}>
      <p className="countdown-text">
        Oferta por <br /> tempo Limitado
      </p>
      <p className="countdown-regressive">
        {remainingTime > 0 ? formatTime(remainingTime) : "Tempo Esgotado!"}
      </p>
    </div>
  );
};

// Validação das props com PropTypes
Countdown.propTypes = {
  durationHours: PropTypes.number.isRequired, // A duração em horas é obrigatória
  className: PropTypes.string, // className é opcional
};

export default Countdown;
