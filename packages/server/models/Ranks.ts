import {
  AllowNull,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  HasMany,
  Index,
  Model,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

import { User } from './User';

@Table({
  tableName: 'ranks',
})
export class Ranks extends Model {
  @AllowNull(false)
  @Unique
  @Index
  @Column(DataType.STRING)
  rank_name!: string;

  @HasMany(() => User, 'rank_id')
  user!: User;

  @CreatedAt
  @Column(DataType.DATE)
  created_at!: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updated_at!: Date;

  @DeletedAt
  @Column(DataType.DATE)
  deleted_at!: Date;
}
