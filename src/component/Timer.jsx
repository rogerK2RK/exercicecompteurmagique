import { useState, useEffect } from "react";

export default function Timer() {
    const [ seconds, setSeconds ] = useState(0)

    useEffect(() => {
        // setInterval: fn native à JS qui execute une fonction (1er parametre) toutes les x ms (2eme parametre)
        const interval = setInterval(() => {
            /* Pour trick le useEffect, plutot que de faire:
                setSeconds(seconds + 1)
                je spécifie plutot en parametre du set state une fonction qui va modifier sa valeur
                setState((previousValue) => previousValue + 1) 
                (previousValue) => previousValue + 1 => retourne la nouvelle valeur du state
            */
            setSeconds((prev) => prev + 1)
        }, 1000);

        return () => {
            // Nettoyage: arrêter le timer lorsque le composant est démonté
            // (clearInterval supprime l'interval spécifié en param)
            clearInterval(interval);
        };
    }, []) // []: tableau vide, ca veut dire que la fonction est executé UNE SEULE FOIS après le montage du component

    return <p>Temps écoulé depuis le montage du component: { seconds } seconde(s)</p>
}