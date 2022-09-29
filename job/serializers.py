from rest_framework import serializers

from .models import CondidatesApplied, Job


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'


class CondidatesAppliedSerializer(serializers.ModelSerializer):

    job = JobSerializer

    class Meta:
        model = CondidatesApplied
        fields = ('user', 'resume', 'appliedAt', 'job')
