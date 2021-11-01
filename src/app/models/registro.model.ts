

export class Registro {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor(format: string, text: string) {
        this.format = format;
        this.text = text;
        this.created = new Date();

        this.tipoRegistro();
    }

    private tipoRegistro(): void {

        const ini = this.text.substr(0,4);
        console.log(ini);
        switch (ini) {
            case 'http':
                this.type = 'http';
                break;
            case 'text:':
                this.type = 'text';
                break;
            default:
                this.type = 'No reconocido';
                break;
        }

    }

}
