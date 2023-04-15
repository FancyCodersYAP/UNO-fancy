import * as path from 'path';
import { type SequelizeOptions, Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PORT,
} = process.env;

export const initPostgresDBConnection = async (): Promise<
  Sequelize | undefined
> => {
  let client;

  try {
    // Подключаемся к Postgre
    const sequelizeOptions: SequelizeOptions = {
      host: POSTGRES_HOST || 'localhost',
      port: Number(POSTGRES_PORT),
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      dialect: 'postgres',
      logging: false,
    };

    client = new Sequelize(sequelizeOptions);

    /** Регистрируем модели */
    const modelsPath = path.join(__dirname, '../models');
    client.addModels([modelsPath]);

    //TODO убрать alter на продакшене (при деплое)
    const synced = await client.sync({ alter: true });

    if (synced) {
      console.log('  ➜ 🎸 Synchronized the Postgres database');
      // // Добавляем темы по умолчанию в БД при старте сервера, без этого не будет корректно работать темизация.
      // await Themes.bulkCreate([{ theme_name: 'DARK' }, { theme_name: 'LIGHT' }], { ignoreDuplicates: true });
      //
      // // Добавляем категории форума по умолчанию в БД при старте сервера
      // await ForumSection.bulkCreate([{ name: 'Новости' }, { name: 'Игра' }, { name: 'Баги' }, { name: 'Флуд' }], {
      //   ignoreDuplicates: true,
      // });
      await User.bulkCreate(
        [
          {
            ya_id: 11111,
            login: 'test_login1',
            display_name: 'test_name1',
            avatar: '/test_avatar1',
          },
          {
            ya_id: 22223,
            login: 'test_login2',
            display_name: 'test_name2',
            avatar: '/test_avatar2',
          },
        ],
        {
          ignoreDuplicates: true,
        }
      );
    } else {
      console.log('Sync error');
    }

    console.log('  ➜ 🎸 Connected to the Postgres database');
  } catch (e) {
    console.error(e);
  }

  return client;
};
