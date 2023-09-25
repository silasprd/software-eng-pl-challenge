import { School } from "../core/entity/School";
import { AppDataSource } from "../data-source";
import { TypeSchool } from "../utils/enums/TypeSchool.enum";

class SchoolDataMocked {

    public async createSchoolMocked(){

        await AppDataSource.manager.save(
            AppDataSource.manager.create(School, {
                cnpj: "13.443.982/0001-38",
                name: "Escola de Dados",
                type: TypeSchool.DADOS,
                students: []
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(School, {
                cnpj: "97.264.182/0001-40",
                name: "Escola de Produtos",
                type: TypeSchool.PRODUTO,
                students: []
            })
        )
        await AppDataSource.manager.save(
            AppDataSource.manager.create(School, {
                cnpj: "72.633.518/0001-73",
                name: "Escola de Tecnologia",
                type: TypeSchool.TECNOLOGIA,
                students: []
            })
        )
    }

}

export default new SchoolDataMocked();