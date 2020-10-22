// VALIDAR FORMULARIO EFECTIVO 

$('#formEft').bootstrapValidator({

    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
        nombre: {
            validators: {
                notEmpty: {
                    message: 'El nombre y apellido es requerido'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'El correo es requerido y no puede ser vacio'
                },
                emailAddress: {
                    message: 'El correo electronico no es valido'
                }
            }
        },
        telefono: {
            message: 'El teléfono no es valido',
            validators: {
                notEmpty: {
                    message: 'El teléfono es requerido y no puede ser vacio'
                },
                regexp: {
                    regexp: /^[0-9]+$/,
                    message: 'El teléfono solo puede contener números'
                }
            }
        },
    }
});

// VALIDAR FORMULARIO TARJETA 

$('#formTc').bootstrapValidator({

    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
        tarjeta: {
            message: 'El número de tarjeta no es valido',
            validators: {
                notEmpty: {
                    message: 'El número de tarjeta es requerido y no puede ser vacio'
                },
                regexp: {
                    regexp: /^[0-9]+$/,
                    message: 'El número de tarjeta solo puede contener números'
                }
            }
        },
        nombre: {
            validators: {
                notEmpty: {
                    message: 'El nombre y apellido es requerido'
                }
            }
        },
        codigoseg: {
            message: 'El código de seguridad no es valido',
            validators: {
                notEmpty: {
                    message: 'El código de seguridad es requerido y no puede ser vacio'
                },
                regexp: {
                    regexp: /^[0-9]+$/,
                    message: 'El código de seguridad solo puede contener números'
                }
            }
        },
        nrodoc: {
            message: 'El número de documento no es valido',
            validators: {
                notEmpty: {
                    message: 'El número de documento es requerido y no puede ser vacio'
                },
                regexp: {
                    regexp: /^[0-9]+$/,
                    message: 'El número de documento solo puede contener números'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'El correo es requerido y no puede ser vacio'
                },
                emailAddress: {
                    message: 'El correo electronico no es valido'
                }
            }
        },
        telefono: {
            message: 'El teléfono no es valido',
            validators: {
                notEmpty: {
                    message: 'El teléfono es requerido y no puede ser vacio'
                },
                regexp: {
                    regexp: /^[0-9]+$/,
                    message: 'El teléfono solo puede contener números'
                }
            }
        },
    }
});