(function ($, fluid) {
    var BASE_EL_PATH = "fields";
    var COMPLETE_CLASS = "complete";
    var COMPLETE_VALUE = "C";
    var ABSENT_CLASS = "absent";
    var ABSENT_VALUE = "0";
    
    var relations = {
        Cranium: {
            children: [
                "Frontal_L", "Frontal_R",
                "Occipital",
                "Sphenoid",
                "Vomer",
                "Ethmoid",
                "Parietal_L", "Parietal_R",
                "Temporal_L", "Temporal_R",
                "Maxilla_L", "Maxilla_R",
                "Nasal_L", "Nasal_R",
                "Zygomatic_L", "Zygomatic_R",
                "Lacrimal_L", "Lacrimal_R",
                "Palatine_L", "Palatine_R",
                "Mandible_L", "Mandible_R",
                "Orbit_L", "Orbit_R"
            ],
            computedFrom: [
                "Frontal_L", "Frontal_R",
                "Occipital",
                "Sphenoid",
                "Vomer",
                "Ethmoid",
                "Parietal_L", "Parietal_R",
                "Temporal_L", "Temporal_R",
                "Maxilla_L", "Maxilla_R",
                "Nasal_L", "Nasal_R",
                "Zygomatic_L", "Zygomatic_R",
                "Lacrimal_L", "Lacrimal_R",
                "Palatine_L", "Palatine_R",
                "Mandible_L", "Mandible_R",
                "Orbit_L", "Orbit_R"
            ]
        },
        Occipital: {
            children: [
                'Occipital_pars_basilaris',
                'Occipital_L_pars_lateralis',
                'Occipital_R_pars_lateralis'
            ],
            computedFrom: [
                'Occipital_pars_basilaris',
                'Occipital_L_pars_lateralis',
                'Occipital_R_pars_lateralis',
                '__other__'
            ]
        },
        
        //
        
        Humerus_L_complete: {
            children: [
                "Humerus_L_JS_P",
                "Humerus_L_shaft_P",
                "Humerus_L_shaft_M",
                "Humerus_L_shaft_D",
                "Humerus_L_JS_D"
            ],
            computedFrom: [
                "Humerus_L_JS_P",
                "Humerus_L_shaft_P",
                "Humerus_L_shaft_M",
                "Humerus_L_shaft_D",
                "Humerus_L_JS_D"
            ]
        },
        Humerus_R_complete: {
            children: [
                "Humerus_R_JS_P",
                "Humerus_R_shaft_P",
                "Humerus_R_shaft_M",
                "Humerus_R_shaft_D",
                "Humerus_R_JS_D"
            ],
            computedFrom: [
                "Humerus_R_JS_P",
                "Humerus_R_shaft_P",
                "Humerus_R_shaft_M",
                "Humerus_R_shaft_D",
                "Humerus_R_JS_D"
            ]
        },
        Radius_L_complete: {
            children: [
                "Radius_L_JS_P",
                "Radius_L_shaft_P",
                "Radius_L_shaft_M",
                "Radius_L_shaft_D",
                "Radius_L_JS_D"
            ],
            computedFrom: [
                "Radius_L_JS_P",
                "Radius_L_shaft_P",
                "Radius_L_shaft_M",
                "Radius_L_shaft_D",
                "Radius_L_JS_D"
            ]
        },
        Radius_R_complete: {
            children: [
                "Radius_R_JS_P",
                "Radius_R_shaft_P",
                "Radius_R_shaft_M",
                "Radius_R_shaft_D",
                "Radius_R_JS_D"
            ],
            computedFrom: [
                "Radius_R_JS_P",
                "Radius_R_shaft_P",
                "Radius_R_shaft_M",
                "Radius_R_shaft_D",
                "Radius_R_JS_D"
            ]
        },
        Ulna_L_complete: {
            children: [
                "Ulna_L_JS_P",
                "Ulna_L_shaft_P",
                "Ulna_L_shaft_M",
                "Ulna_L_shaft_D",
                "Ulna_L_JS_D"
            ],
            computedFrom: [
                "Ulna_L_JS_P",
                "Ulna_L_shaft_P",
                "Ulna_L_shaft_M",
                "Ulna_L_shaft_D",
                "Ulna_L_JS_D"
            ]
        },
        Ulna_R_complete: {
            children: [
                "Ulna_R_JS_P",
                "Ulna_R_shaft_P",
                "Ulna_R_shaft_M",
                "Ulna_R_shaft_D",
                "Ulna_R_JS_D"
            ],
            computedFrom: [
                "Ulna_R_JS_P",
                "Ulna_R_shaft_P",
                "Ulna_R_shaft_M",
                "Ulna_R_shaft_D",
                "Ulna_R_JS_D"
            ]
        },
       
        //
        
        Femur_L_complete: {
            children: [
                "Femur_L_JS_P",
                "Femur_L_shaft_P",
                "Femur_L_shaft_M",
                "Femur_L_shaft_D",
                "Femur_L_JS_D"
            ],
            computedFrom: [
                "Femur_L_JS_P",
                "Femur_L_shaft_P",
                "Femur_L_shaft_M",
                "Femur_L_shaft_D",
                "Femur_L_JS_D"
            ]
        },
        Femur_R_complete: {
            children: [
                "Femur_R_JS_P",
                "Femur_R_shaft_P",
                "Femur_R_shaft_M",
                "Femur_R_shaft_D",
                "Femur_R_JS_D"
            ],
            computedFrom: [
                "Femur_R_JS_P",
                "Femur_R_shaft_P",
                "Femur_R_shaft_M",
                "Femur_R_shaft_D",
                "Femur_R_JS_D"
            ]
        },
        Tibia_L_complete: {
            children: [
                "Tibia_L_JS_P",
                "Tibia_L_shaft_P",
                "Tibia_L_shaft_M",
                "Tibia_L_shaft_D",
                "Tibia_L_JS_D"
            ],
            computedFrom: [
                "Tibia_L_JS_P",
                "Tibia_L_shaft_P",
                "Tibia_L_shaft_M",
                "Tibia_L_shaft_D",
                "Tibia_L_JS_D"
            ]
        },
        Tibia_R_complete: {
            children: [
                "Tibia_R_JS_P",
                "Tibia_R_shaft_P",
                "Tibia_R_shaft_M",
                "Tibia_R_shaft_D",
                "Tibia_R_JS_D"
            ],
            computedFrom: [
                "Tibia_R_JS_P",
                "Tibia_R_shaft_P",
                "Tibia_R_shaft_M",
                "Tibia_R_shaft_D",
                "Tibia_R_JS_D"
            ]
        },
        Fibula_L_complete: {
            children: [
                "Fibula_L_JS_P",
                "Fibula_L_shaft_P",
                "Fibula_L_shaft_M",
                "Fibula_L_shaft_D",
                "Fibula_L_JS_D"
            ],
            computedFrom: [
                "Fibula_L_JS_P",
                "Fibula_L_shaft_P",
                "Fibula_L_shaft_M",
                "Fibula_L_shaft_D",
                "Fibula_L_JS_D"
            ]
        },
        Fibula_R_complete: {
            children: [
                "Fibula_R_JS_P",
                "Fibula_R_shaft_P",
                "Fibula_R_shaft_M",
                "Fibula_R_shaft_D",
                "Fibula_R_JS_D"
            ],
            computedFrom: [
                "Fibula_R_JS_P",
                "Fibula_R_shaft_P",
                "Fibula_R_shaft_M",
                "Fibula_R_shaft_D",
                "Fibula_R_JS_D"
            ]
        },
       
        //
        
        Os_coxae_L: {
            children: [
                "Ischium_L",
                "Ilium_L",
                "Pubis_L",
                "Acetabulum_L",
                "Auricular_surf_L"
            ],
            computedFrom: [
                "Ischium_L",
                "Ilium_L",
                "Pubis_L",
            ]
        },
        Os_coxae_R: {
            children: [
                "Ischium_R",
                "Ilium_R",
                "Pubis_R",
                "Acetabulum_R",
                "Auricular_surf_R"
            ],
            computedFrom: [
                "Ischium_R",
                "Ilium_R",
                "Pubis_R"
            ]
        },
        Scapula_L: {
            children: [
                'Glenoid_L'
            ],
            computedFrom: [
                'Glenoid_L',
                '__other__'
            ]
        },
        Scapula_R: {
            children: [
                'Glenoid_R'
            ],
            computedFrom: [
                'Glenoid_R',
                '__other__'
            ]
        },
        Sternum: {
            children: [
                'Manubrium'
            ],
            computedFrom: [
                'Manubrium',
                '__other__'
            ]
        },
        
        //
        
        Carpals_L_complete: {
            children: [
                "Scaphoid_L",
                "Lunate_L",
                "Triquetral_L",
                "Pisiform_L",
                "Trapezium_L",
                "Trapezoid_L",
                "Capitate_L",
                "Hamate_L"
            ],
            computedFrom: [
                "Scaphoid_L",
                "Lunate_L",
                "Triquetral_L",
                "Pisiform_L",
                "Trapezium_L",
                "Trapezoid_L",
                "Capitate_L",
                "Hamate_L"
            ]
        },
        
        Carpals_R_complete: {
            children: [
                "Scaphoid_R",
                "Lunate_R",
                "Triquetral_R",
                "Pisiform_R",
                "Trapezium_R",
                "Trapezoid_R",
                "Capitate_R",
                "Hamate_R"
            ],
            computedFrom: [
                "Scaphoid_R",
                "Lunate_R",
                "Triquetral_R",
                "Pisiform_R",
                "Trapezium_R",
                "Trapezoid_R",
                "Capitate_R",
                "Hamate_R"
            ]
        },
        
        //
        
        Tarsals_L_complete: {
            children: [
                "Talus_L",
                "Calcaneus_L",
                "Navicular_L",
                "Cuboid_L",
                "Med_cuneif_1_L",
                "Int_cuneif_2_L",
                "Lat_cuneif_3_L"
            ],
            computedFrom: [
                "Talus_L",
                "Calcaneus_L",
                "Navicular_L",
                "Cuboid_L",
                "Med_cuneif_1_L",
                "Int_cuneif_2_L",
                "Lat_cuneif_3_L"
            ]
        },

        Tarsals_R_complete: {
            children: [
                "Talus_R",
                "Calcaneus_R",
                "Navicular_R",
                "Cuboid_R",
                "Med_cuneif_1_R",
                "Int_cuneif_2_R",
                "Lat_cuneif_3_R"
            ],
            computedFrom: [
                "Talus_R",
                "Calcaneus_R",
                "Navicular_R",
                "Cuboid_R",
                "Med_cuneif_1_R",
                "Int_cuneif_2_R",
                "Lat_cuneif_3_R"
            ]
        },
        
        //
        
        MC_L_complete: {
            children: [
                "MC1_L",
                "MC2_L",
                "MC3_L",
                "MC4_L",
                "MC5_L"
            ],
            computedFrom: [
                "MC1_L",
                "MC2_L",
                "MC3_L",
                "MC4_L",
                "MC5_L"
            ]
        },
        
        MC_R_complete: {
            children: [
                "MC1_R",
                "MC2_R",
                "MC3_R",
                "MC4_R",
                "MC5_R"
            ],
            computedFrom: [
                "MC1_R",
                "MC2_R",
                "MC3_R",
                "MC4_R",
                "MC5_R"
            ]
        },
        
        //
        
        MT_L_complete: {
            children: [
                "MT1_L",
                "MT2_L",
                "MT3_L",
                "MT4_L",
                "MT5_L"
            ],
            computedFrom: [
                "MT1_L",
                "MT2_L",
                "MT3_L",
                "MT4_L",
                "MT5_L"
            ]
        },
        
        MT_R_complete: {
            children: [
                "MT1_R",
                "MT2_R",
                "MT3_R",
                "MT4_R",
                "MT5_R"
            ],
            computedFrom: [
                "MT1_R",
                "MT2_R",
                "MT3_R",
                "MT4_R",
                "MT5_R"
            ]
        },
        
        //
        
        Vertebrae_complete: {
            children: [
                "C1_complete",
                "C2_complete",
                "C3_complete",
                "C4_complete",
                "C5_complete",
                "C6_complete",
                "C7_complete",
                "T1_complete",
                "T2_complete",
                "T3_complete",
                "T4_complete",
                "T5_complete",
                "T6_complete",
                "T7_complete",
                "T8_complete",
                "T9_complete",
                "T10_complete",
                "T11_complete",
                "T12_complete",
                "L1_complete",
                "L2_complete",
                "L3_complete",
                "L4_complete",
                "L5_complete",
                "Sacrum_complete",
                "Coccyx_complete"
            ],
            computedFrom: [
                "C1_complete",
                "C2_complete",
                "C3_complete",
                "C4_complete",
                "C5_complete",
                "C6_complete",
                "C7_complete",
                "T1_complete",
                "T2_complete",
                "T3_complete",
                "T4_complete",
                "T5_complete",
                "T6_complete",
                "T7_complete",
                "T8_complete",
                "T9_complete",
                "T10_complete",
                "T11_complete",
                "T12_complete",
                "L1_complete",
                "L2_complete",
                "L3_complete",
                "L4_complete",
                "L5_complete",
                "Sacrum_complete",
                "Coccyx_complete"
            ]
        },
        
        C1_complete: {
            children: [
                "C1_L_arch",
                "C1_R_arch"
            ],
            computedFrom: [
                "C1_L_arch",
                "C1_R_arch",
                "__other__"
            ]
        },
        
        C2_complete: {
            children: [
                "C2_centrum",
                "C2_L_arch",
                "C2_R_arch"
            ],
            computedFrom: [
                "C2_centrum",
                "C2_L_arch",
                "C2_R_arch",
                "__other__"
            ]
        },

        C3_complete: {
            children: [
                "C3_centrum",
                "C3_L_arch",
                "C3_R_arch"
            ],
            computedFrom: [
                "C3_centrum",
                "C3_L_arch",
                "C3_R_arch",
                "__other__"
            ]
        },

        C4_complete: {
            children: [
                "C4_centrum",
                "C4_L_arch",
                "C4_R_arch"
            ],
            computedFrom: [
                "C4_centrum",
                "C4_L_arch",
                "C4_R_arch",
                "__other__"
            ]
        },

        C5_complete: {
            children: [
                "C5_centrum",
                "C5_L_arch",
                "C5_R_arch"
            ],
            computedFrom: [
                "C5_centrum",
                "C5_L_arch",
                "C5_R_arch",
                "__other__"
            ]
        },

        C6_complete: {
            children: [
                "C6_centrum",
                "C6_L_arch",
                "C6_R_arch"
            ],
            computedFrom: [
                "C6_centrum",
                "C6_L_arch",
                "C6_R_arch",
                "__other__"
            ]
        },

        C7_complete: {
            children: [
                "C7_centrum",
                "C7_L_arch",
                "C7_R_arch"
            ],
            computedFrom: [
                "C7_centrum",
                "C7_L_arch",
                "C7_R_arch",
                "__other__"
            ]
        },
        
        T1_complete: {
            children: [
                "T1_centrum",
                "T1_L_arch",
                "T1_R_arch"
            ],
            computedFrom: [
                "T1_centrum",
                "T1_L_arch",
                "T1_R_arch",
                "__other__"
            ]
        },
        
        T2_complete: {
            children: [
                "T2_centrum",
                "T2_L_arch",
                "T2_R_arch"
            ],
            computedFrom: [
                "T2_centrum",
                "T2_L_arch",
                "T2_R_arch",
                "__other__"
            ]
        },

        T3_complete: {
            children: [
                "T3_centrum",
                "T3_L_arch",
                "T3_R_arch"
            ],
            computedFrom: [
                "T3_centrum",
                "T3_L_arch",
                "T3_R_arch",
                "__other__"
            ]
        },

        T4_complete: {
            children: [
                "T4_centrum",
                "T4_L_arch",
                "T4_R_arch"
            ],
            computedFrom: [
                "T4_centrum",
                "T4_L_arch",
                "T4_R_arch",
                "__other__"
            ]
        },

        T5_complete: {
            children: [
                "T5_centrum",
                "T5_L_arch",
                "T5_R_arch"
            ],
            computedFrom: [
                "T5_centrum",
                "T5_L_arch",
                "T5_R_arch",
                "__other__"
            ]
        },

        T6_complete: {
            children: [
                "T6_centrum",
                "T6_L_arch",
                "T6_R_arch"
            ],
            computedFrom: [
                "T6_centrum",
                "T6_L_arch",
                "T6_R_arch",
                "__other__"
            ]
        },

        T7_complete: {
            children: [
                "T7_centrum",
                "T7_L_arch",
                "T7_R_arch"
            ],
            computedFrom: [
                "T7_centrum",
                "T7_L_arch",
                "T7_R_arch",
                "__other__"
            ]
        },
        
        T8_complete: {
            children: [
                "T8_centrum",
                "T8_L_arch",
                "T8_R_arch"
            ],
            computedFrom: [
                "T8_centrum",
                "T8_L_arch",
                "T8_R_arch",
                "__other__"
            ]
        },
        
        T9_complete: {
            children: [
                "T9_centrum",
                "T9_L_arch",
                "T9_R_arch"
            ],
            computedFrom: [
                "T9_centrum",
                "T9_L_arch",
                "T9_R_arch",
                "__other__"
            ]
        },
        
        T10_complete: {
            children: [
                "T10_centrum",
                "T10_L_arch",
                "T10_R_arch"
            ],
            computedFrom: [
                "T10_centrum",
                "T10_L_arch",
                "T10_R_arch",
                "__other__"
            ]
        },
        
        T11_complete: {
            children: [
                "T11_centrum",
                "T11_L_arch",
                "T11_R_arch"
            ],
            computedFrom: [
                "T11_centrum",
                "T11_L_arch",
                "T11_R_arch",
                "__other__"
            ]
        },
        
        T12_complete: {
            children: [
                "T12_centrum",
                "T12_L_arch",
                "T12_R_arch"
            ],
            computedFrom: [
                "T12_centrum",
                "T12_L_arch",
                "T12_R_arch",
                "__other__"
            ]
        },

        L1_complete: {
            children: [
                "L1_centrum",
                "L1_L_arch",
                "L1_R_arch"
            ],
            computedFrom: [
                "L1_centrum",
                "L1_L_arch",
                "L1_R_arch",
                "__other__"
            ]
        },
        
        L2_complete: {
            children: [
                "L2_centrum",
                "L2_L_arch",
                "L2_R_arch"
            ],
            computedFrom: [
                "L2_centrum",
                "L2_L_arch",
                "L2_R_arch",
                "__other__"
            ]
        },

        L3_complete: {
            children: [
                "L3_centrum",
                "L3_L_arch",
                "L3_R_arch"
            ],
            computedFrom: [
                "L3_centrum",
                "L3_L_arch",
                "L3_R_arch",
                "__other__"
            ]
        },

        L4_complete: {
            children: [
                "L4_centrum",
                "L4_L_arch",
                "L4_R_arch"
            ],
            computedFrom: [
                "L4_centrum",
                "L4_L_arch",
                "L4_R_arch",
                "__other__"
            ]
        },

        L5_complete: {
            children: [
                "L5_centrum",
                "L5_L_arch",
                "L5_R_arch"
            ],
            computedFrom: [
                "L5_centrum",
                "L5_L_arch",
                "L5_R_arch",
                "__other__"
            ]
        },

        Sacrum_complete: {
            children: [
                "Sacrum",
                "Sacrum_L_alae",
                "Sacrum_R_alae",
                "S1_complete",
                "S2_complete",
                "S3_complete",
                "S4_complete",
                "S5_complete"
            ],
            branchedChildren: [
                [
                    "Sacrum",
                    "Sacrum_L_alae",
                    "Sacrum_R_alae",
                ],[
                    "S1_complete",
                    "S2_complete",
                    "S3_complete",
                    "S4_complete",
                    "S5_complete"
                ]
            ],
            computedFrom: [
                "S1_complete",
                "S2_complete",
                "S3_complete",
                "S4_complete",
                "S5_complete"
            ]
        },
        
        S1_complete: {
            children: [
                "S1_centrum",
                "S1_L_ala",
                "S1_R_ala"
            ],
            computedFrom: [
                "S1_centrum",
                "S1_L_ala",
                "S1_R_ala",
                "__other__"
            ]
        },
        
        S2_complete: {
            children: [
                "S2_centrum",
                "S2_L_ala",
                "S2_R_ala"
            ],
            computedFrom: [
                "S2_centrum",
                "S2_L_ala",
                "S2_R_ala",
                "__other__"
            ]
        },

        S3_complete: {
            children: [
                "S3_centrum",
                "S3_L_ala",
                "S3_R_ala"
            ],
            computedFrom: [
                "S3_centrum",
                "S3_L_ala",
                "S3_R_ala",
                "__other__"
            ]
        },

        S4_complete: {
            children: [
                "S4_centrum",
                "S4_L_ala",
                "S4_R_ala"
            ],
            computedFrom: [
                "S4_centrum",
                "S4_L_ala",
                "S4_R_ala",
                "__other__"
            ]
        },

        S5_complete: {
            children: [
                "S5_centrum",
                "S5_L_ala",
                "S5_R_ala"
            ],
            computedFrom: [
                "S5_centrum",
                "S5_L_ala",
                "S5_R_ala",
                "__other__"
            ]
        },

        Coccyx_complete: {
            children: [
                "Coccyx"
            ],
            computedFrom: [
                "Coccyx"
            ]
        }
    };
    
    var parents = {}
    
    for (var parentName in relations) {
        var children = relations[parentName].children;
        
        if (children) {
            for (var i=0; i<children.length; i++) {
                var childName = children[i];
                
                parents[childName] = parentName;
            }
        }
    }
    
    fluid.defaults("cspace.osteology", {
        gradeNames: ["fluid.modelComponent", "autoInit"],
        selectors: {},
        strings: {},
        parentBundle: "{globalBundle}",
        preInitFunction: "cspace.osteology.preInit",
        finalInitFunction: "cspace.osteology.finalInit",
        invokers: {
            bindEvents: {
                funcName: "cspace.osteology.bindEvents",
                args: ["{osteology}", "{recordEditor}"]
            },
            initForm: {
                funcName: "cspace.osteology.initForm",
                args: ["{osteology}"]
            }
        }
    });
    
    cspace.osteology.preInit = function(that) {
        that.setFieldValue = function(fieldName, value) {
            if (fieldName in that.radioInputs) {
                var input = that.radioInputs[fieldName][value];
            
                if (input) {
                    input.checked = true;
                }
                else {
                    var radioInputs = that.radioInputs[fieldName];
                
                    for(var value in radioInputs) {
                        radioInputs[value].checked = false;
                    }
                }
            }
            else if (fieldName in that.textInputs) {
                var input = that.textInputs[fieldName];
                
                if (input) {
                    input.value = value;
                }
            }
        };
        
        that.computeValue = function(fieldName) {
            var value = that.model.fields[fieldName];
            
            if (fieldName in relations) {
                var computedFromFields = relations[fieldName].computedFrom;
                
                if (computedFromFields && computedFromFields.length > 0) {
                    if (that.allFieldsHaveValue(computedFromFields, COMPLETE_VALUE)) {
                        value = COMPLETE_VALUE;
                    }
                    else if (that.allFieldsHaveValue(computedFromFields, ABSENT_VALUE)) {
                        value = ABSENT_VALUE;
                    }
                    else if (value == COMPLETE_VALUE || value == ABSENT_VALUE) {
                        value = "";
                    }
                }
            }
            
            return value;
        };
        
        that.allFieldsHaveValue = function(fields, value) {
            var result = true;
        
            for (var i=0; i<fields.length; i++) {
                var name = fields[i];

                if (that.model.fields[name] !== value) {
                    result = false;
                    break;
                }
            }
    
            return result;
        };
    };
    
    cspace.osteology.finalInit = function(that) {
        that.bindEvents();
    };
    
    cspace.osteology.bindEvents = function(that, recordEditor) {
        recordEditor.events.afterRecordRender.addListener(function() {
            that.initForm();
        }, that.typeName);
    };
    
    cspace.osteology.initForm = function(that) {
        that.form = $("form.csc-osteology-form");
        
        // name: {value: input element, ...}
        that.radioInputs = {};
                
        that.form.find("input[type='radio']").each(function(index, element) {
            $(element).wrap("<label></label>").after("<span></span>").addClass(function() {
                switch (element.value) {
                    case COMPLETE_VALUE: return COMPLETE_CLASS;
                    case ABSENT_VALUE: return ABSENT_CLASS;
                }
            });
            
            var inputName = element.name;
            
            if (!(inputName in that.radioInputs)) {
                that.radioInputs[inputName] = {};
            }
            
            that.radioInputs[inputName][element.value] = element;
        });

        // console.log(that.radioInputs);
        
        // name: input element
        that.textInputs = {};
        
        that.form.find("input[type='text']").each(function(index, element) {
            var inputName = element.name;
            
            if (!(inputName in that.textInputs)) {
                that.textInputs[inputName] = element;
            }
        });
        
        // console.log(that.textInputs);
        
        // Fill in the form using values from the model.
        
        for (var name in that.model.fields) {
            that.setFieldValue(name, that.model.fields[name]);
        }
        
        that.form.change(function(event) {
            var target = event.target;
            var name = target.name;
            var value = target.value;
            
            that.applier.requestChange(cspace.util.composeSegments(BASE_EL_PATH, name), value);

            if (target.tagName === "INPUT" && target.type === "radio") {
                updateParents(that, name);
                
                if (value === COMPLETE_VALUE || value === ABSENT_VALUE) {
                    updateChildren(that, name, value);
                }
            }
        });
    };
    
    var updateChildren = function(that, name, value) {
        if (name in relations) {
            var children = relations[name].children;

            if (children && children.length > 0) {
                for (var i=0; i<children.length; i++) {
                    var childName = children[i];
                
                    that.setFieldValue(childName, value);
                    that.applier.requestChange(cspace.util.composeSegments(BASE_EL_PATH, childName), value);
                
                    updateChildren(that, childName, value);
                }
            }
        }
    };
    
    var updateBranchedChildren = function(that, name, excludeBranchContainingName, value) {
        if (name in relations) {
            var branches = relations[name].branchedChildren;
            
            if (branches && branches.length > 0) {
                for (var i=0; i<branches.length; i++) {
                    var branch = branches[i];
                    
                    if (branch.indexOf(excludeBranchContainingName) == -1) {
                        console.log("updating branch");
                        console.log(branch);
                        
                        for (var b=0; b<branch.length; b++) {
                            var childName = branch[b];
                
                            that.setFieldValue(childName, value);
                            that.applier.requestChange(cspace.util.composeSegments(BASE_EL_PATH, childName), value);
                
                            updateChildren(that, childName, value);
                        }
                    }
                }
            }
        }
    };
    
    var updateParents = function(that, name) {
        if (name in parents) {
            var parentName = parents[name];
            
            if (parentName) {
                var value = that.computeValue(parentName);
                
                that.setFieldValue(parentName, value);
                that.applier.requestChange(cspace.util.composeSegments(BASE_EL_PATH, parentName), value);
                
                if (value === COMPLETE_VALUE || value === ABSENT_VALUE) {
                    updateBranchedChildren(that, parentName, name, value);
                }
                
                updateParents(that, parentName);
            }
        }
    };
    
    fluid.fetchResources.primeCacheFromResources("cspace.osteology");
})(jQuery, fluid);