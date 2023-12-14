docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postmat11/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postmat11/app ../..
