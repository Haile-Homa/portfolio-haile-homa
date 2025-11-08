import { useState, useEffect } from 'react'

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
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-sm">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Install Portfolio App
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Install this app on your device for a better experience.
            </p>
            <div className="flex gap-2">
                <button
                    onClick={installApp}
                    className="flex-1 bg-[#44b6eb] text-white px-3 py-2 rounded text-sm font-medium hover:bg-[#29a8e3] transition-colors"
                >
                    Install
                </button>
                <button
                    onClick={dismissPrompt}
                    className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                    Later
                </button>
            </div>
        </div>
    )
}

export default PWAInstallPrompt