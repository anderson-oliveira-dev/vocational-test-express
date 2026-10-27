const SECRET_KEY = 'sua-chave-secreta-de-32-bytes!!'

export function encryptData(data) {
    const jsonString = JSON.stringify(data)
    const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString()
    return encrypted
}

export function decryptData(ciphertext) {
    try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY)
        const decryptedString = bytes.toString(CryptoJS.enc.Utf8)
        return JSON.parse(decryptedString)
    } catch (error) {
        console.error('Falha ao descriptografar:', error)
        return null
    }
}