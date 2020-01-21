from rest_framework import serializers
from django.contrib.auth.models import User, Group, Permission
from django.contrib.auth import authenticate

#Permissions serializer
class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'

#Group Serializer
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model= Group
        fields = '__all__'

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    user_permissions = PermissionSerializer(many=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'user_permissions')

    def created(self, validated_data):
        permissions_data = validated_data.pop('user_permissions')
        user = User.objects.create(**validated_data)

        for permission_data in permissions_data:
            Permission.objects.create(user=user, **permission_data)

        return user

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )

        return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    
    def validate(self, data):
        user = authenticate(**data)

        if user and user.is_active:

            return user

        raise serializers.ValidationError("Incorrect Credentials")

class PasswordSerializer(serializers.Serializer):
    username = serializers.Charfield()
    password = serializers.Charfield()

    def create(self, validated_data):
        pass
    def update(self, instance, validated_data):
        pass
    def validate(self, data):
        if data["username"] == data["password"]:
            raise serializers.ValidationError("Username and new password should be different")
        
        return data

    def validated_password(self,value):
        if len(value) <8 or len(value) > 16:
            raise serializers.ValidationError("It should be between 8 and 16 characters long")
        if not any(x.isupper() for x in value):
            raise serializers.ValidationError("It should have at least one upper case alphabet")
        if not any(x.islower() for x in value):
            raise serializers.ValidationError("It should have at least one lower case alphabet")
        if not any(x.isdigit() for x in value):
            raise serializers.ValidationError("It should have at least one number")
        valid_special_characters = {'@', '_', '!', '#', '$', '%', '^', '&', '*', '(', ')',
                                    '<', '>', '?', '/', '|', '{', '}', '~', ':'}
        if not any(x in valid_special_characters for x in value):
            raise serializers.ValidationError("It should have at least one special character")

        return value
