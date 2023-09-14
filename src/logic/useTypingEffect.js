"use client"
import { useEffect, useRef, useState } from "react";

//recebe o texto e a duração da animação
export function useTypingEffect(
    textToType,
    interKeyStrokeDurationInMs
){
    //cria 2 estados para a atual posição
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0)

    useEffect(()=>{
        setInterval(()=>{
            const intervalID = setCurrentPosition(value => value + 1); //atualiza a posição atual
            currentPositionRef.current++;

            //evita que a variavel se incremente infinitamente
            if(currentPositionRef > textToType.length){
                clearInterval(intervalID);
            }
        }, interKeyStrokeDurationInMs); //o tempo da execução do interval é o recebido como argumento

        //interval e effect resultam na criação de 2 intervalos,
        //podemos parar o intervalo do useEffect com a cleanup function
        //assim limpamos o antigo Effect para poder iniciar o novo Effect
        return() => {
            clearInterval(intervalID);

            //após a animação se encerrar temos uma nova letra na posição 0
            //reseta a posição para 0
            currentPositionRef.current = 0;
            setCurrentPosition(0)
        }
        //useEffect é executado no momento em que muda o interval e a letra a ser digitada no textToType
    }, [interKeyStrokeDurationInMs, textToType]);

    //retorna cada letra separadamente
    return textToType.substring(0, currentPosition)
}