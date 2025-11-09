import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

const PWAInstallPrompt = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null)
    const [showPrompt, setShowPrompt] = useState(false)

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault()
            setDeferredPrompt(e)
            setShowPrompt(true)
        }

        window.addEventListener('beforeinstallprompt', handler)

        return () => {
            window.removeEventListener('beforeinstallprompt', handler)
        }
    }, [])

    const installApp = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt()
            const { outcome } = await deferredPrompt.userChoice
            if (outcome === 'accepted') {
                setDeferredPrompt(null)
                setShowPrompt(false)
            }
        }
    }

    const dismissPrompt = () => {
        setDeferredPrompt(null)
        setShowPrompt(false)
    }

    if (!showPrompt) return null

    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-3 right-4 p-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-xl bg-white/20 dark:bg-gray-900/40 max-w-sm text-gray-900 dark:text-gray-100"
        >
            <h3 className="font-semibold mb-2 drop-shadow-sm">
                Install Portfolio App
            </h3>
            <p className="text-sm mb-3 opacity-90">
                Install this app on your device for a better experience.
            </p>
            <div className="flex gap-2">
                <button
                    onClick={installApp}
                    className="flex-1 bg-[#25adec]/80 text-white px-3 py-2 rounded text-sm font-medium hover:bg-[#67bee6] transition-colors backdrop-blur-sm"
                >
                    Install
                </button>
                <button
                    onClick={dismissPrompt}
                    className="flex-1 bg-white/40 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 px-3 py-2 rounded text-sm font-medium hover:bg-white/60 dark:hover:bg-gray-600 transition-colors backdrop-blur-sm"
                >
                    Later
                </button>
            </div>
        </motion.div>
    )

}

export default PWAInstallPrompt