from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    with open("website/pages/index.html") as fd:
        return HttpResponse(fd.readlines())
