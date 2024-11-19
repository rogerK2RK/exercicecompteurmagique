import { useState, useEffect } from "react";

export default function ResponsiveBackground() {
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ backgroundColor, setBackgroundColor ] = useState("#ADD8E6")

    useEffect(() => {
        const handleResize = () => {
            const newSize = window.innerWidth;
            setWidth(newSize);
            setBackgroundColor(newSize < 800 ? "#FFC0CB" : "#ADD8E6");
        };
        
        window.addEventListener("resize", handleResize)

        return () => {
            // Nettoyage: arrêter d'écouter l'event lorsque le composant est démonté
            window.removeEventListener("resize", handleResize);
        };
    }, []) // []: tableau vide, ca veut dire que la fonction est executé UNE SEULE FOIS après le montage du component

    return <p style={{ backgroundColor, padding: "20px", textAlign: "center" }}>Largeur de la fenêtre: { width }px</p>
}