import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tb_restaurantes' })
export class Restaurant {
    @PrimaryColumn() public name: string;
    @Column() public address: string;
    @Column() public categories: string;
    @Column() public city: string;
    @Column() public claimed: string;
    @Column() public country: string;
    @Column() public cuisines: string;
    @Column({ name: 'dateopened' }) public dateOpened: string;
    @Column({ name: 'dateupdated' }) public dateUpdated: string;
    @Column() public descriptions: string;
    @Column({ name: 'facebookpageurl' }) public facebookPageURL: string;
    @Column() public features: string;
    @Column() public hours: string;
    @Column() public images: string;
    @Column({ name: 'isclosed' }) public isClosed: string;
    @Column() public key: string;
    @Column({name: 'lat'}) public latitude: number;
    @Column() public languages: string;
    @Column({name: 'long'}) public longetude: number;
    @Column() public menus: string;
    @Column({ name: 'menuurl' }) public menuURL: string;
    @Column({ name: 'paymenttypes' }) public paymentTypes: string;
    @Column() public phones: string;
    @Column({ name: 'postalcode' }) public postalCode: string;
    @Column({ name: 'pricerange' }) public priceRange: string;
    @Column() public province: string;
    @Column() public sic: string;
    @Column() public twitter: string;
    @Column() public websites: string;
}