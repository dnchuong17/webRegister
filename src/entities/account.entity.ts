import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('account')
export class AccountEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userAccount: string;

  @Column()
  userPassword: string;

  @Column()
  userName: string;
  @Column({default: null, nullable: true})
  userEmail: string;

  @Column({default: null, nullable: true})
  userPhone: string;

  @Column({default: false})
  deleted: boolean;
}
