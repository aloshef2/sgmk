import {MigrationInterface, QueryRunner} from "typeorm";

export class Form1654301980885 implements MigrationInterface {
    name = 'Form1654301980885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "lable" character varying NOT NULL, "params" character varying array NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "form" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "lable" character varying NOT NULL, "button_lable" character varying NOT NULL, "submit_url" character varying NOT NULL, "object" integer array NOT NULL, CONSTRAINT "PK_8f72b95aa2f8ba82cf95dc7579e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "form"`);
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
