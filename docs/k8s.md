
minikube start --vm-driver=hyperv
minikube status

kubectl cluster-info

kubectl create deployment hello-node --image=gcr.io/hello-minikube-zero-install/hello-node

kubectl get deployments

kubectl get pods

kubectl get events

kubectl config view

kubectl expose deployment hello-node --type=LoadBalancer --port=8080

minikube service hello-node

kubectl get services

kubectl delete service hello-node
kubectl delete deployment hello-node

minikube stop
minikube delete

kubectl apply -f https://k8s.io/examples/application/mysql/mysql-pv.yaml

kubectl apply -f https://k8s.io/examples/application/mysql/mysql-deployment.yaml

kubectl apply -f mysql-service.yaml

kubectl describe deployment mysql

kubectl get pods -l app=mysql

kubectl describe pvc mysql-pv-claim

kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword


minikube service mysql --url