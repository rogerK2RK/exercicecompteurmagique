import { useState, useEffect } from "react";

export default function WindowWidthTracker() {
    const [ width, setWidth ] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            // Nettoyage: arrêter d'écouter l'event lorsque le composant est démonté
            window.removeEventListener("resize", handleResize);
        };
    }, []) // []: tableau vide, ca veut dire que la fonction est executé UNE SEULE FOIS après le montage du component

    return <p>Largeur de la fenêtre: { width }px</p>
}