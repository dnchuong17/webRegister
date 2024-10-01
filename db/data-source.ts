import { DataSource,DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 1712,
    username: 'root',
    password: '',
    database: 'nestjs-api-v1',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
