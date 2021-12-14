# Combined
run:  build-frontend run-backend 
install: install-frontend install-backend

# Frontend
build-frontend:
	npm --prefix ./frontend run build

install-frontend:
	npm --prefix ./frontend install

# Backend
run-backend:
	npm --prefix ./backend run start

install-backend:
	npm --prefix ./backend install

