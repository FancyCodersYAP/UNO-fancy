import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  NotEmpty,
  Table,
} from 'sequelize-typescript';

import { ForumMessage } from './ForumMessage';
import { User } from './User';

@Table({
  tableName: 'forum_topics',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class ForumTopic extends Model {
  @AllowNull(false)
  @NotEmpty({ msg: 'Поле не может быть пустым' })
  @Column
  name!: string;

  @AllowNull(false)
  @NotEmpty({ msg: 'Поле не может быть пустым' })
  @Column
  description!: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => ForumMessage, 'topic_id')
  messages?: ForumMessage[];
}
