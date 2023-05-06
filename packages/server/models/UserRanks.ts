import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Index,
  Model,
  Table,
  Unique,
  UpdatedAt,
  HasOne,
  BelongsToMany,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';

import { Ranks } from './Ranks';
import { User } from './User';

@Table({
  tableName: 'user_ranks',
})
export class UserRanks extends Model {
  @AllowNull(false)
  @Column(DataType.INTEGER)
  rank_id!: number;

  @AllowNull(false)
  @Unique
  @Index
  @Column(DataType.INTEGER)
  user_id!: number;

  @BelongsTo(() => Ranks, 'rank_id')
  rank!: Ranks;

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

// export class UserRanks extends Model {
//   @ForeignKey(() => Ranks)
//   @Column
//   rank_id!: number;
//
//   @ForeignKey(() => User)
//   @Column
//   user_id!: number;
//
//   // @BelongsTo(() => Ranks, 'rank_id')
//   // rank!: Ranks;
//   //
//   // @BelongsToMany(() => User, () => Ranks, 'user_rank')
//   // user!: User;
//
//   @CreatedAt
//   @Column(DataType.DATE)
//   created_at!: Date;
//
//   @UpdatedAt
//   @Column(DataType.DATE)
//   updated_at!: Date;
//
//   @DeletedAt
//   @Column(DataType.DATE)
//   deleted_at!: Date;
// }
