/* DB
CREATE TABLE pp_users (
id SERIAL PRIMARY KEY,
full_name VARCHAR(200) NOT NULL,
email_address VARCHAR(200) NOT NULL,
password VARCHAR(200) NOT NULL
);

CREATE TABLE pp_futures_data (
id SERIAL PRIMARY KEY,
future varchar,
market varchar,
contract_months varchar,
trade_hours varchar,
glbx_symbol varchar,
tick numeric,
tick_value numeric,
tick_per_point integer,
point_value numeric,
exchange varchar
);

CREATE TABLE pp_user_favorites (
id integer,
user_id integer REFERENCES pp_users (id),
future varchar,
glbx_symbol varchar,
contract_months varchar,
tick numeric,
tick_value numeric,
tick_per_point integer,
point_value numeric
);

*/

-- INSERT INTO pp_futures_data 
-- (future, market, contract_months, trade_hours, glbx_symbol, tick, tick_value, tick_per_point, point_value, exchange)
-- VALUES 

-- ('S&P 500', 'Equity', 'H, M, U, Z', '9:30 - 16:15', 'ES', .25, 12.50, 4, 50, 'CME'), 
-- ('NASDAQ 100', 'Equity', 'H, M, U, Z', '9:30 - 16:15', 'NQ', .25, 5.00, 4, 20, 'CME'), 
-- ('Russell 2000', 'Equity', 'H, M, U, Z', '9:30 - 16:15', 'RTY', .10, 5.00, 10, 50, 'ICE'), 
-- ('Dow Jones 30', 'Equity', 'H, M, U, Z', '9:30 - 16:15', 'YM', 1.00, 5.00, 1, 5, 'CBOT'), 
-- ('Nikkei', 'Equity', 'H, M, U, Z', '9:30 - 16:15', 'NKD', 5.00, 25.00, 1, 25, 'TSE');

-- ('10 Year', 'Bonds', 'H, M, U, Z', '8:20 - 15:00', 'ZN', 0.015625, 15.63, 64, 1000, 'CBOT'), 
-- ('30 Year', 'Bonds', 'H, M, U, Z', '8:20 - 15:00', 'ZB', 0.03125, 31.25, 30, 1000, 'CBOT'), 
-- ('5 Year', 'Bonds', 'H, M, U, Z', '8:20 - 15:00', 'ZF', 0.0078125, 7.81, 32, 1000, 'CBOT');

-- ('US Dollar', 'Currencies', 'H, M, U, Z', '8:20 - 15:00', 'IDX', 0.005, 5.00, 200, 1000, 'ICE'),
-- ('Australian Dollar', 'Currencies', 'H, M, U, Z', '8:20 - 15:00', '6A', 0.0001, 10.00, 100, 1000, 'CME'),
-- ('British Pound', 'Currencies', 'H, M, U, Z', '8:20 - 15:00', '6B', 0.0001, 6.25, 100, 625, 'CME'),
-- ('Canadian Dollar', 'Currencies', 'H, M, U, Z', '8:20 - 15:00', '6C', 0.00005, 5.00, 200, 1000, 'CME'),
-- ('Euro', 'Currencies', 'H, M, U, Z', '8:20 - 15:00', '6E', 0.00005, 6.25, 200, 1250, 'CME'),
-- ('Japanese Yen', 'Currencies', 'H, M, U, Z', '8:20 - 15:00', '6J', 0.0000005, 6.25, 200, 1250, 'CME'),
-- ('Swiss Franc', 'Currencies', 'H, M, U, Z', '8:20 - 15:00', '6S', 0.0001, 12.50, 100, 1250, 'CME'),
-- ('New Zealean Dollar', 'Currencies', 'H, M, U, Z', '8:20 - 15:00', '6N', 0.0001, 10.00, 100, 1000, 'CME');

-- ('Gold', 'Metals', 'G, J, M, Q, V, Z', '8:20 - 13:30', 'GC', 0.10, 10.00, 10, 100, 'COMEX'),
-- ('Coper', 'Metals', 'F, H, K, N, U, Z', NULL, 'HG', 0.0005, 12.50, 2000, 25000, 'COMEX'),
-- ('Platinum', 'Metals', 'F, J, N, V', NULL, 'PL', 0.10, 5.00, 10, 50, 'COMEX'),
-- ('Silver', 'Metals', 'F, H, K, N, U, Z', '8:25 - 13:25', 'SI', 0.005, 25.00, 200, 5000, 'NYMEX');

-- ('Crude Oil', 'Energy', 'All Months', '9:00 - 14:30', 'CL', 0.01, 10.00, 100, 1000, 'NYMEX'),
-- ('Natural Gas', 'Energy', 'All Months', '9:00 - 14:30', 'NG', 0.001, 10.00, 1000, 10000, 'NYMEX'),
-- ('Gasoline', 'Energy', 'All Months', '9:00 - 14:30', 'RB', 0.0001, 4.20, 10000, 42000, 'NYMEX'),
-- ('Heating Oil', 'Energy', 'All Months', '9:00 - 14:30', 'HO', 0.0001, 4.20, 10000, 42000, 'NYMEX');