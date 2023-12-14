﻿



CREATE TABLE "Ячейка"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерЯчейки" NUMBER(10) NULL,

	"Хранение" RAW(16) NOT NULL,

	"Постамат" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Постамат"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Статус" NVARCHAR2(1) NULL,

	"СлужбаДоставки" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Хранение"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"ДатаНачала" DATE NULL,

	"ДатаЗавершения" DATE NULL,

	"Продления" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Пользователь"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Посылка"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Статус" NVARCHAR2(1) NULL,

	"Транзакция" RAW(16) NOT NULL,

	"Хранение" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Логистика"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Состояние" NVARCHAR2(1) NULL,

	"Информация" NVARCHAR2(255) NULL,

	"СлужбаДоставки" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СлужбаДоставки"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Наименвоание" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Транзакция"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Время" NVARCHAR2(255) NULL,

	"Оплата" NVARCHAR2(1) NULL,

	"Сумма" FLOAT(126) NULL,

	"Пользователь" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Ячейка"
	ADD CONSTRAINT "Ячейка_FХране_7696" FOREIGN KEY ("Хранение") REFERENCES "Хранение" ("primaryKey");

CREATE INDEX "Ячейка_IХранение" on "Ячейка" ("Хранение");

ALTER TABLE "Ячейка"
	ADD CONSTRAINT "Ячейка_FПоста_2213" FOREIGN KEY ("Постамат") REFERENCES "Постамат" ("primaryKey");

CREATE INDEX "Ячейка_IПостамат" on "Ячейка" ("Постамат");

ALTER TABLE "Постамат"
	ADD CONSTRAINT "Постамат_FСлу_1891" FOREIGN KEY ("СлужбаДоставки") REFERENCES "СлужбаДоставки" ("primaryKey");

CREATE INDEX "Постамат_IСлу_6127" on "Постамат" ("СлужбаДоставки");

ALTER TABLE "Посылка"
	ADD CONSTRAINT "Посылка_FТранз_315" FOREIGN KEY ("Транзакция") REFERENCES "Транзакция" ("primaryKey");

CREATE INDEX "Посылка_IТран_5942" on "Посылка" ("Транзакция");

ALTER TABLE "Посылка"
	ADD CONSTRAINT "Посылка_FХран_1872" FOREIGN KEY ("Хранение") REFERENCES "Хранение" ("primaryKey");

CREATE INDEX "Посылка_IХран_5077" on "Посылка" ("Хранение");

ALTER TABLE "Логистика"
	ADD CONSTRAINT "Логистика_FСлу_84" FOREIGN KEY ("СлужбаДоставки") REFERENCES "СлужбаДоставки" ("primaryKey");

CREATE INDEX "Логистика_IСл_6696" on "Логистика" ("СлужбаДоставки");

ALTER TABLE "Транзакция"
	ADD CONSTRAINT "Транзакция_FП_7955" FOREIGN KEY ("Пользователь") REFERENCES "Пользователь" ("primaryKey");

CREATE INDEX "Транзакция_IП_3177" on "Транзакция" ("Пользователь");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


