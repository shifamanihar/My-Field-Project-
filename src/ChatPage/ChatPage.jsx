import React, { useEffect } from "react";
// CSS import rahne dein agar aapko background styling karni hai
import "./ChatPage.css"; 

export default function ChatPage() {
    // 1. Apni unique scripts ki URLS
    const INJECT_URL = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
    
    // 2. Yahan humne naya .js file URL dala hai, kyunki isme 'targetSelector' setting hogi
    // NOTE: Aapki actual config URL use karein, jo .js mein end hoti hai
    const CONFIG_URL = "https://files.bpcontent.cloud/2025/10/03/14/20251003141327-9WU7CRS6.js"; 
    
    // 3. Target Element ID
    const TARGET_ELEMENT_ID = "botpress-webchat-container";

    useEffect(() => {
        if (window.botpressWebChat) {
            console.log("Botpress WebChat is already loaded.");
            return;
        }

        const loadScripts = () => {
            const injectScript = document.createElement('script');
            injectScript.src = INJECT_URL;
            injectScript.defer = true;
            document.body.appendChild(injectScript);
            
            const configScript = document.createElement('script');
            configScript.src = CONFIG_URL;
            configScript.defer = true;
            document.body.appendChild(configScript);
        };

        loadScripts();
        
    }, []); 

    return (
        // Aapka puraana UI (header, loading text) hata dein
        // Sirf yeh main container rakhein
        <div 
            id={TARGET_ELEMENT_ID} 
            className="full-chat-embed"
            // CSS se isko puri screen ka size denge
        >
            {/* Jab Botpress load hoga, toh woh is div ke andar aayega */}
            <p>Loading Chatbot...</p> 
        </div>
    );
}