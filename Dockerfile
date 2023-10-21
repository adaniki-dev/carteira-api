# Use a imagem oficial do PostgreSQL a partir do Docker Hub
FROM postgres:latest

# Defina as variáveis de ambiente para configurar o PostgreSQL
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD 2469
ENV POSTGRES_DB postgres

# O PostgreSQL padrão escuta na porta 5432
# Se você quiser especificar outra porta, adicione uma variável de ambiente aqui, por exemplo:
# ENV POSTGRES_PORT 5432

# Exponha a porta em que o PostgreSQL está escutando (padrão 5432)
EXPOSE 5432
