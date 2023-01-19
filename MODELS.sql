BEGIN;
INSERT INTO `models` (`id`, `name`, `port`, `vendor`, `web_port`) VALUES
(X'E1C343F342C44B21BFDC2C6DEFC09254', 'MDHF-IES-L4000-12P8G4SF', 4, 'HYESUNG', 80);
-- 2023-01-18 06:24:39.5608
INSERT INTO `models` (`id`, `name`, `port`, `vendor`, `web_port`) VALUES
(X'A1BA73BBC03144A1ABE80267414E74CE', 'MDHF-IES-L4000-14P8G6SF', 6, 'HYESUNG', 80);
-- 2023-01-18 06:28:07.4315
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), 'version', 'SNMP', '1', X'E1C343F342C44B21BFDC2C6DEFC09254');
-- 2023-01-18 06:28:07.4315
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), 'community', 'SNMP', 'public', X'E1C343F342C44B21BFDC2C6DEFC09254');
-- 2023-01-18 06:28:07.4322
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), 'count', 'SNMP', '4', X'E1C343F342C44B21BFDC2C6DEFC09254');
-- 2023-01-18 06:28:07.4327
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '1', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000009', X'E1C343F342C44B21BFDC2C6DEFC09254');
-- 2023-01-18 06:28:07.4327
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '2', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000010', X'E1C343F342C44B21BFDC2C6DEFC09254');
-- 2023-01-18 06:28:07.4329
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '3', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000011', X'E1C343F342C44B21BFDC2C6DEFC09254');
-- 2023-01-18 06:28:07.4329
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '4', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000012', X'E1C343F342C44B21BFDC2C6DEFC09254');
-- 2023-01-18 06:28:07.4329
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '1', 'POWER', '.1.3.6.1.4.1.43866.1.1.1.9.0', X'E1C343F342C44B21BFDC2C6DEFC09254');
-- 2023-01-18 06:28:07.4329
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '2', 'POWER', '.1.3.6.1.4.1.43866.1.1.1.10.0', X'E1C343F342C44B21BFDC2C6DEFC09254');
-- 2023-01-18 06:31:19.6353
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), 'version', 'SNMP', '1', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6363
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), 'community', 'SNMP', 'public', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6363
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), 'count', 'SNMP', '6', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6363
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '1', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000009', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6363
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '2', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000010', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6363
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '3', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000011', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6363
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '4', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000012', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6363
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '5', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000013', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6373
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '6', 'LINK', '.1.3.6.1.2.1.2.2.1.8.1000014', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6373
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '1', 'POWER', '.1.3.6.1.4.1.43866.1.1.1.9.0', X'A1BA73BBC03144A1ABE80267414E74CE');
-- 2023-01-18 06:31:19.6373
INSERT INTO `model_properties` (`id`, `key`, `type`, `value`, `model_id`) VALUES
(uuid_to_bin(UUID()), '2', 'POWER', '.1.3.6.1.4.1.43866.1.1.1.10.0', X'A1BA73BBC03144A1ABE80267414E74CE');

COMMIT;