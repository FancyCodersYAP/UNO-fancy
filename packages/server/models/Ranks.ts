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
  BelongsToMany,
} from 'sequelize-typescript';

import { UserRanks } from './UserRanks';
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

  @HasMany(() => UserRanks, 'id')
  user_ranks!: UserRanks;

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
