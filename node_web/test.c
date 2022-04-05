#include <stdio.h>
void input(int a[], int i);
double sum(int a[], int len);
double avg(double total, int len);
int maxscore(int a[]);

void main(){
    int a[5]; 
    int i;
    for(i=0;i<5;i++){
        input(a,i);
    }
    double total=sum(a,5);
    double average=avg(total, 5);
    int mx=maxscore(a);
    printf("KOR: %d\n",a[0]);
    printf("ENG: %d\n",a[1]);
    printf("MATH: %d\n",a[2]);
    printf("MUSIC: %d\n",a[3]);
    printf("SPORTS: %d\n",a[4]);   
    printf("TOTAL: %.2lf\n",total);
    printf("AVERAGE: %.2lf\n",average);
    printf("Max Score: %d\n",mx);
}
void input(int a[], int i){
    int n;
    printf("%d번째 점수를 입력=>",i);
    scanf("%d",&n);
    a[i]=n;
}
double sum(int a[], int len){
    int i;
    double total=0.0;
    for(i=0;i<len;i++){
        total+=a[i];
    }
    return total;
}
double avg(double total, int len){
  return  (total/len);
}
int maxscore(int a[]){
    int i;
    int max=0;
    for(i=0;i<5;i++){
        if(a[i]>max){
            max=a[i];
        }
    }
    return max;
}