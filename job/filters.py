from django_filters import rest_framework as filters
from .models import Job


class JobsFilter(filters.FilterSet):

    min_salary = filters.NumberFilter(field_name="salary" or 0, lookup_expr='gte')

    class Meta:
        model = Job
        fields = ('education', 'jobType', 'experience')
