export default class Decorate {
    private static _applications = new Set<HTMLElement>()
    public static register( element: HTMLElement ) {
        if ( !(element instanceof HTMLElement) ) {
            throw new TypeError('O dado informado não é um elemento HTML')
        }
        if ( Decorate._applications.has(element) ) {
            throw new Error('Decorate já foi registrado neste elemento!')
        }
        Decorate._applications.add(element)
    }
    public static View() {
        return (...args: any[]) => {
            console.log('blergh')
        }
    }
}

export const { View } = Decorate
