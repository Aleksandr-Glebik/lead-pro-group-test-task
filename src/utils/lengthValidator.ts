interface ILengthValidatorResult {
    message: string
    isValid: boolean
}

export const lengthValidator = (
    str: string,
    minLength = 3,
    maxLength: number
): ILengthValidatorResult => {
    let initialMessage = 'Поле не должно быть пустым'

    if (str.trim().length === 0) {
        return {
            message: initialMessage,
            isValid: false
        }
    }

    if (str.trim().length && str.trim().length < minLength) {
        return {
            message: `Длина поля должна быть более ${minLength} символов`,
            isValid: false
        }
    }

    if (str.trim().length && str.trim().length > minLength && str.trim().length < maxLength) {
        return {
            message: '',
            isValid: true
        }
    }

    if (str.trim().length >= maxLength) {
        return {
            message: `Длина поля не должна быть более ${maxLength} символов`,
            isValid: false
        }
    }

    return {
        message: '',
        isValid: true
    }
}