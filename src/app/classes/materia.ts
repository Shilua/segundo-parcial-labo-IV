export class Materia {
    public id:string;
    public nombre:string;
    public cuatrimestre:string;
    public cupos:number;
    public profesor:string;
    public isActive: boolean;
    public emailProfesor: string;
    public alumnos: Array<string>;
}
