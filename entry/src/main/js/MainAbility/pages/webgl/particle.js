//by @wonglok831
//MIT Licensed

/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

var gl = {
    DEPTH_BUFFER_BIT: 0x00000100,
    STENCIL_BUFFER_BIT: 0x00000400,
    COLOR_BUFFER_BIT: 0x00004000,
    POINTS: 0x0000,
    LINES: 0x0001,
    LINE_LOOP: 0x0002,
    LINE_STRIP: 0x0003,
    TRIANGLES: 0x0004,
    TRIANGLE_STRIP: 0x0005,
    TRIANGLE_FAN: 0x0006,
    ZERO: 0,
    ONE: 1,
    SRC_COLOR: 0x0300,
    ONE_MINUS_SRC_COLOR: 0x0301,
    SRC_ALPHA: 0x0302,
    ONE_MINUS_SRC_ALPHA: 0x0303,
    DST_ALPHA: 0x0304,
    ONE_MINUS_DST_ALPHA: 0x0305,
    DST_COLOR: 0x0306,
    ONE_MINUS_DST_COLOR: 0x0307,
    SRC_ALPHA_SATURATE: 0x0308,
    FUNC_ADD: 0x8006,
    BLEND_EQUATION: 0x8009,
    BLEND_EQUATION_RGB: 0x8009,
    BLEND_EQUATION_ALPHA: 0x883D,
    FUNC_SUBTRACT: 0x800A,
    FUNC_REVERSE_SUBTRACT: 0x800B,
    BLEND_DST_RGB: 0x80C8,
    BLEND_SRC_RGB: 0x80C9,
    BLEND_DST_ALPHA: 0x80CA,
    BLEND_SRC_ALPHA: 0x80CB,
    CONSTANT_COLOR: 0x8001,
    ONE_MINUS_CONSTANT_COLOR: 0x8002,
    CONSTANT_ALPHA: 0x8003,
    ONE_MINUS_CONSTANT_ALPHA: 0x8004,
    BLEND_COLOR: 0x8005,
    ARRAY_BUFFER: 0x8892,
    ELEMENT_ARRAY_BUFFER: 0x8893,
    ARRAY_BUFFER_BINDING: 0x8894,
    ELEMENT_ARRAY_BUFFER_BINDING: 0x8895,
    STREAM_DRAW: 0x88E0,
    STATIC_DRAW: 0x88E4,
    DYNAMIC_DRAW: 0x88E8,
    BUFFER_SIZE: 0x8764,
    BUFFER_USAGE: 0x8765,
    CURRENT_VERTEX_ATTRIB: 0x8626,
    FRONT: 0x0404,
    BACK: 0x0405,
    FRONT_AND_BACK: 0x0408,
    CULL_FACE: 0x0B44,
    BLEND: 0x0BE2,
    DITHER: 0x0BD0,
    STENCIL_TEST: 0x0B90,
    DEPTH_TEST: 0x0B71,
    SCISSOR_TEST: 0x0C11,
    POLYGON_OFFSET_FILL: 0x8037,
    SAMPLE_ALPHA_TO_COVERAGE: 0x809E,
    SAMPLE_COVERAGE: 0x80A0,
    NO_ERROR: 0,
    INVALID_ENUM: 0x0500,
    INVALID_VALUE: 0x0501,
    INVALID_OPERATION: 0x0502,
    OUT_OF_MEMORY: 0x0505,
    CW: 0x0900,
    CCW: 0x0901,
    LINE_WIDTH: 0x0B21,
    ALIASED_POINT_SIZE_RANGE: 0x846D,
    ALIASED_LINE_WIDTH_RANGE: 0x846E,
    CULL_FACE_MODE: 0x0B45,
    FRONT_FACE: 0x0B46,
    DEPTH_RANGE: 0x0B70,
    DEPTH_WRITEMASK: 0x0B72,
    DEPTH_CLEAR_VALUE: 0x0B73,
    DEPTH_FUNC: 0x0B74,
    STENCIL_CLEAR_VALUE: 0x0B91,
    STENCIL_FUNC: 0x0B92,
    STENCIL_FAIL: 0x0B94,
    STENCIL_PASS_DEPTH_FAIL: 0x0B95,
    STENCIL_PASS_DEPTH_PASS: 0x0B96,
    STENCIL_REF: 0x0B97,
    STENCIL_VALUE_MASK: 0x0B93,
    STENCIL_WRITEMASK: 0x0B98,
    STENCIL_BACK_FUNC: 0x8800,
    STENCIL_BACK_FAIL: 0x8801,
    STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802,
    STENCIL_BACK_PASS_DEPTH_PASS: 0x8803,
    STENCIL_BACK_REF: 0x8CA3,
    STENCIL_BACK_VALUE_MASK: 0x8CA4,
    STENCIL_BACK_WRITEMASK: 0x8CA5,
    VIEWPORT: 0x0BA2,
    SCISSOR_BOX: 0x0C10,
    COLOR_CLEAR_VALUE: 0x0C22,
    COLOR_WRITEMASK: 0x0C23,
    UNPACK_ALIGNMENT: 0x0CF5,
    PACK_ALIGNMENT: 0x0D05,
    MAX_TEXTURE_SIZE: 0x0D33,
    MAX_VIEWPORT_DIMS: 0x0D3A,
    SUBPIXEL_BITS: 0x0D50,
    RED_BITS: 0x0D52,
    GREEN_BITS: 0x0D53,
    BLUE_BITS: 0x0D54,
    ALPHA_BITS: 0x0D55,
    DEPTH_BITS: 0x0D56,
    STENCIL_BITS: 0x0D57,
    POLYGON_OFFSET_UNITS: 0x2A00,
    POLYGON_OFFSET_FACTOR: 0x8038,
    TEXTURE_BINDING_2D: 0x8069,
    SAMPLE_BUFFERS: 0x80A8,
    SAMPLES: 0x80A9,
    RGBA8: 0x8058,
    SAMPLE_COVERAGE_VALUE: 0x80AA,
    SAMPLE_COVERAGE_INVERT: 0x80AB,
    COMPRESSED_TEXTURE_FORMATS: 0x86A3,
    DONT_CARE: 0x1100,
    FASTEST: 0x1101,
    NICEST: 0x1102,
    GENERATE_MIPMAP_HINT: 0x8192,
    BYTE: 0x1400,
    UNSIGNED_BYTE: 0x1401,
    SHORT: 0x1402,
    UNSIGNED_SHORT: 0x1403,
    INT: 0x1404,
    UNSIGNED_INT: 0x1405,
    FLOAT: 0x1406,
    DEPTH_COMPONENT: 0x1902,
    ALPHA: 0x1906,
    RGB: 0x1907,
    RGBA: 0x1908,
    LUMINANCE: 0x1909,
    LUMINANCE_ALPHA: 0x190A,
    UNSIGNED_SHORT_4_4_4_4: 0x8033,
    UNSIGNED_SHORT_5_5_5_1: 0x8034,
    UNSIGNED_SHORT_5_6_5: 0x8363,
    FRAGMENT_SHADER: 0x8B30,
    VERTEX_SHADER: 0x8B31,
    MAX_VERTEX_ATTRIBS: 0x8869,
    MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB,
    MAX_VARYING_VECTORS: 0x8DFC,
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C,
    MAX_TEXTURE_IMAGE_UNITS: 0x8872,
    MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD,
    SHADER_TYPE: 0x8B4F,
    DELETE_STATUS: 0x8B80,
    LINK_STATUS: 0x8B82,
    VALIDATE_STATUS: 0x8B83,
    ATTACHED_SHADERS: 0x8B85,
    ACTIVE_UNIFORMS: 0x8B86,
    ACTIVE_ATTRIBUTES: 0x8B89,
    SHADING_LANGUAGE_VERSION: 0x8B8C,
    CURRENT_PROGRAM: 0x8B8D,
    NEVER: 0x0200,
    LESS: 0x0201,
    EQUAL: 0x0202,
    LEQUAL: 0x0203,
    GREATER: 0x0204,
    NOTEQUAL: 0x0205,
    GEQUAL: 0x0206,
    ALWAYS: 0x0207,
    KEEP: 0x1E00,
    REPLACE: 0x1E01,
    INCR: 0x1E02,
    DECR: 0x1E03,
    INVERT: 0x150A,
    INCR_WRAP: 0x8507,
    DECR_WRAP: 0x8508,
    VENDOR: 0x1F00,
    RENDERER: 0x1F01,
    VERSION: 0x1F02,
    NEAREST: 0x2600,
    LINEAR: 0x2601,
    NEAREST_MIPMAP_NEAREST: 0x2700,
    LINEAR_MIPMAP_NEAREST: 0x2701,
    NEAREST_MIPMAP_LINEAR: 0x2702,
    LINEAR_MIPMAP_LINEAR: 0x2703,
    TEXTURE_MAG_FILTER: 0x2800,
    TEXTURE_MIN_FILTER: 0x2801,
    TEXTURE_WRAP_S: 0x2802,
    TEXTURE_WRAP_T: 0x2803,
    TEXTURE_2D: 0x0DE1,
    TEXTURE: 0x1702,
    TEXTURE_CUBE_MAP: 0x8513,
    TEXTURE_BINDING_CUBE_MAP: 0x8514,
    TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515,
    TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516,
    TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517,
    TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518,
    TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519,
    TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A,
    MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C,
    TEXTURE0: 0x84C0,
    TEXTURE1: 0x84C1,
    TEXTURE2: 0x84C2,
    TEXTURE3: 0x84C3,
    TEXTURE4: 0x84C4,
    TEXTURE5: 0x84C5,
    TEXTURE6: 0x84C6,
    TEXTURE7: 0x84C7,
    TEXTURE8: 0x84C8,
    TEXTURE9: 0x84C9,
    TEXTURE10: 0x84CA,
    TEXTURE11: 0x84CB,
    TEXTURE12: 0x84CC,
    TEXTURE13: 0x84CD,
    TEXTURE14: 0x84CE,
    TEXTURE15: 0x84CF,
    TEXTURE16: 0x84D0,
    TEXTURE17: 0x84D1,
    TEXTURE18: 0x84D2,
    TEXTURE19: 0x84D3,
    TEXTURE20: 0x84D4,
    TEXTURE21: 0x84D5,
    TEXTURE22: 0x84D6,
    TEXTURE23: 0x84D7,
    TEXTURE24: 0x84D8,
    TEXTURE25: 0x84D9,
    TEXTURE26: 0x84DA,
    TEXTURE27: 0x84DB,
    TEXTURE28: 0x84DC,
    TEXTURE29: 0x84DD,
    TEXTURE30: 0x84DE,
    TEXTURE31: 0x84DF,
    ACTIVE_TEXTURE: 0x84E0,
    REPEAT: 0x2901,
    CLAMP_TO_EDGE: 0x812F,
    MIRRORED_REPEAT: 0x8370,
    FLOAT_VEC2: 0x8B50,
    FLOAT_VEC3: 0x8B51,
    FLOAT_VEC4: 0x8B52,
    INT_VEC2: 0x8B53,
    INT_VEC3: 0x8B54,
    INT_VEC4: 0x8B55,
    BOOL: 0x8B56,
    BOOL_VEC2: 0x8B57,
    BOOL_VEC3: 0x8B58,
    BOOL_VEC4: 0x8B59,
    FLOAT_MAT2: 0x8B5A,
    FLOAT_MAT3: 0x8B5B,
    FLOAT_MAT4: 0x8B5C,
    SAMPLER_2D: 0x8B5E,
    SAMPLER_CUBE: 0x8B60,
    VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622,
    VERTEX_ATTRIB_ARRAY_SIZE: 0x8623,
    VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624,
    VERTEX_ATTRIB_ARRAY_TYPE: 0x8625,
    VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A,
    VERTEX_ATTRIB_ARRAY_POINTER: 0x8645,
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F,
    IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A,
    IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B,
    COMPILE_STATUS: 0x8B81,
    LOW_FLOAT: 0x8DF0,
    MEDIUM_FLOAT: 0x8DF1,
    HIGH_FLOAT: 0x8DF2,
    LOW_INT: 0x8DF3,
    MEDIUM_INT: 0x8DF4,
    HIGH_INT: 0x8DF5,
    FRAMEBUFFER: 0x8D40,
    RENDERBUFFER: 0x8D41,
    RGBA4: 0x8056,
    RGB5_A1: 0x8057,
    RGB565: 0x8D62,
    DEPTH_COMPONENT16: 0x81A5,
    STENCIL_INDEX8: 0x8D48,
    DEPTH_STENCIL: 0x84F9,
    RENDERBUFFER_WIDTH: 0x8D42,
    RENDERBUFFER_HEIGHT: 0x8D43,
    RENDERBUFFER_INTERNAL_FORMAT: 0x8D44,
    RENDERBUFFER_RED_SIZE: 0x8D50,
    RENDERBUFFER_GREEN_SIZE: 0x8D51,
    RENDERBUFFER_BLUE_SIZE: 0x8D52,
    RENDERBUFFER_ALPHA_SIZE: 0x8D53,
    RENDERBUFFER_DEPTH_SIZE: 0x8D54,
    RENDERBUFFER_STENCIL_SIZE: 0x8D55,
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0,
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3,
    COLOR_ATTACHMENT0: 0x8CE0,
    DEPTH_ATTACHMENT: 0x8D00,
    STENCIL_ATTACHMENT: 0x8D20,
    DEPTH_STENCIL_ATTACHMENT: 0x821A,
    NONE: 0,
    FRAMEBUFFER_COMPLETE: 0x8CD5,
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6,
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7,
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9,
    FRAMEBUFFER_UNSUPPORTED: 0x8CDD,
    FRAMEBUFFER_BINDING: 0x8CA6,
    RENDERBUFFER_BINDING: 0x8CA7,
    MAX_RENDERBUFFER_SIZE: 0x84E8,
    INVALID_FRAMEBUFFER_OPERATION: 0x0506,
    UNPACK_FLIP_Y_WEBGL: 0x9240,
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241,
    CONTEXT_LOST_WEBGL: 0x9242,
    UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243,
    BROWSER_DEFAULT_WEBGL: 0x9244,
    TEXTURE_MAX_LOD: 0x813B,
    TEXTURE_BASE_LEVEL: 0x813C,
    TEXTURE_IMMUTABLE_FORMAT: 0x912F,
    UNIFORM_BLOCK_BINDING: 0x8A3F,
    UNIFORM_BLOCK_DATA_SIZE: 0x8A40,
    UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42,
    UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43,
    UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44,
    UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46,
    RED: 0x1903,
    PIXEL_UNPACK_BUFFER: 0x88EC,
    RGB8: 0x8051,
    R16F: 0x822D,
    COPY_WRITE_BUFFER: 0x8F37,
    TEXTURE_3D: 0x806F,
    COMPRESSED_R11_EAC: 0x9270,
    COPY_READ_BUFFER: 0x8F36,
    TRANSFORM_FEEDBACK_BUFFER: 0x8C8E,
    TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F,
    TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85,
    TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84,
    UNIFORM_BUFFER_BINDING: 0x8A28,
    UNIFORM_BUFFER_SIZE: 0x8A2A,
    UNIFORM_BUFFER_START: 0x8A29,
    DYNAMIC_READ: 0x88E9,
    READ_FRAMEBUFFER: 0x8CA8,
    COLOR_ATTACHMENT1: 0x8CE1,
    INTERLEAVED_ATTRIBS: 0x8C8C,
    UNIFORM_OFFSET: 0x8A3B,
    UNIFORM_TYPE: 0x8A37,
    UNIFORM_SIZE: 0x8A38,
    UNIFORM_BLOCK_INDEX: 0x8A3A,
    UNIFORM_ARRAY_STRIDE: 0x8A3C,
    UNIFORM_MATRIX_STRIDE: 0x8A3D,
    UNIFORM_IS_ROW_MAJOR: 0x8A3E,
    TEXTURE_MAX_ANISOTROPY_EXT: 0x84FE
};


var mat4 = {};

mat4.create = function () {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

mat4.identity = function (out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

mat4.perspective = function (out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
};

mat4.translate = function (out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2],
        a00,
        a01,
        a02,
        a03,
        a10,
        a11,
        a12,
        a13,
        a20,
        a21,
        a22,
        a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];

        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

mat4.rotate = function (out, a, rad, axis) {
    var x = axis[0],
        y = axis[1],
        z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s,
        c,
        t,
        a00,
        a01,
        a02,
        a03,
        a10,
        a11,
        a12,
        a13,
        a20,
        a21,
        a22,
        a23,
        b00,
        b01,
        b02,
        b10,
        b11,
        b12,
        b20,
        b21,
        b22;

    var GLMAT_EPSILON = 0.000001;

    if (Math.abs(len) < GLMAT_EPSILON) {
        return null;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

var util = {
    prepShader: (gl, shaderSource, shaderType) => {
        var webGLShader = gl.createShader(shaderType);
        gl.shaderSource(webGLShader, shaderSource);
        gl.compileShader(webGLShader);

        var success = gl.getShaderParameter(webGLShader, gl.COMPILE_STATUS);
        if (!success) {
            var error = gl.getShaderInfoLog(webGLShader);
            console.error(error);
        }

        return webGLShader;
    },

    prepProgram: (gl, vShader, fShader) => {
        var program = gl.createProgram();

        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);

        gl.linkProgram(program);

        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!success) {
            var error = gl.getProgramInfoLog(program);
            console.error(error);
        }

        return program;
    },
};

class Lines {
    constructor(count) {
        this.count = count;
        this.vertex = new Float32Array(count * 4);
        this.lines = [];

        this.setup();
    }

    setup() {
        for (var i = 0; i < this.count; i++) {
            this.lines.push(new Line(this.vertex, i, i % 3));
        }
    }

    update(cb) {
        this.lines.forEach(cb);
    }
}

class Vector2 {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.isVector2 = true;
    }

    get width() {
        return this.x;
    }

    set width(value) {
        this.x = value;
    }

    get height() {
        return this.y;
    }

    set height(value) {
        this.y = value;
    }

    //

    set(x, y) {
        this.x = x;
        this.y = y;

        return this;
    }

    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;

        return this;
    }

    setX(x) {
        this.x = x;

        return this;
    }

    setY(y) {
        this.y = y;

        return this;
    }
    setComponent(index, value) {
        switch (index) {
            case 0:
                this.x = value;
                break;
            case 1:
                this.y = value;
                break;
            default:
                throw new Error("index is out of range: " + index);
        }

        return this;
    }

    getComponent(index) {
        switch (index) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + index);
        }
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    copy(v) {
        this.x = v.x;
        this.y = v.y;

        return this;
    }

    add(v, w) {
        if (w !== undefined) {
            console.warn(
                "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
            );
            return this.addVectors(v, w);
        }

        this.x += v.x;
        this.y += v.y;

        return this;
    }

    addScalar(s) {
        this.x += s;
        this.y += s;

        return this;
    }

    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;

        return this;
    }

    addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;

        return this;
    }

    sub(v, w) {
        if (w !== undefined) {
            console.warn(
                "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
            );
            return this.subVectors(v, w);
        }

        this.x -= v.x;
        this.y -= v.y;

        return this;
    }

    subScalar(s) {
        this.x -= s;
        this.y -= s;

        return this;
    }

    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;

        return this;
    }

    multiply(v) {
        this.x *= v.x;
        this.y *= v.y;

        return this;
    }

    multiplyScalar(scalar) {
        if (isFinite(scalar)) {
            this.x *= scalar;
            this.y *= scalar;
        } else {
            this.x = 0;
            this.y = 0;
        }

        return this;
    }

    divide(v) {
        this.x /= v.x;
        this.y /= v.y;

        return this;
    }

    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }

    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);

        return this;
    }

    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);

        return this;
    }

    clamp(min, max) {
        // This function assumes min < max, if this assumption isn't true it will not operate correctly

        this.x = Math.max(min.x, Math.min(max.x, this.x));
        this.y = Math.max(min.y, Math.min(max.y, this.y));

        return this;
    }

    clampScalar() {
        var min, max;

        return function clampScalar(minVal, maxVal) {
            if (min === undefined) {
                min = new Vector2();
                max = new Vector2();
            }

            min.set(minVal, minVal);
            max.set(maxVal, maxVal);

            return this.clamp(min, max);
        };
    }

    clampLength(min, max) {
        var length = this.length();

        return this.multiplyScalar(Math.max(min, Math.min(max, length)) / length);
    }

    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);

        return this;
    }

    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);

        return this;
    }

    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);

        return this;
    }

    roundToZero() {
        this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);

        return this;
    }

    negate() {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    }

    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    lengthManhattan() {
        return Math.abs(this.x) + Math.abs(this.y);
    }

    normalize() {
        return this.divideScalar(this.length());
    }

    angle() {
        // computes the angle in radians with respect to the positive x-axis

        var angle = Math.atan2(this.y, this.x);

        if (angle < 0) angle += 2 * Math.PI;

        return angle;
    }

    distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
    }

    distanceToSquared(v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        return dx * dx + dy * dy;
    }

    distanceToManhattan(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }

    setLength(length) {
        return this.multiplyScalar(length / this.length());
    }

    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;

        return this;
    }

    lerpVectors(v1, v2, alpha) {
        return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
    }

    equals(v) {
        return v.x === this.x && v.y === this.y;
    }

    fromArray(array, offset) {
        if (offset === undefined) offset = 0;

        this.x = array[offset];
        this.y = array[offset + 1];

        return this;
    }

    toArray(array, offset) {
        if (array === undefined) array = [];
        if (offset === undefined) offset = 0;

        array[offset] = this.x;
        array[offset + 1] = this.y;

        return array;
    }

    fromBufferAttribute(attribute, index, offset) {
        if (offset !== undefined) {
            console.warn(
                "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
            );
        }

        this.x = attribute.getX(index);
        this.y = attribute.getY(index);

        return this;
    }

    rotateAround(center, angle) {
        var c = Math.cos(angle),
            s = Math.sin(angle);

        var x = this.x - center.x;
        var y = this.y - center.y;

        this.x = x * c - y * s + center.x;
        this.y = x * s + y * c + center.y;

        return this;
    }
}

//Nature of Code Book and with my remix
class Mover2D {
    constructor(pX, pY, mass) {
        var Vector2 = Vector2;

        this.position = new Vector2(pX, pY);
        this.velocity = new Vector2(0, 0);
        this.acceleration = new Vector2(0, 0);
        this.mass = mass || 1;
        this.G = 1;
    }

    applyForce(force) {
        var f = force.clone().divideScalar(this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.multiplyScalar(0);
        this.theta = Math.atan2(this.velocity.y, this.velocity.x);
    }

    constrain(val, min, max) {
        if (val < min) {
            return min;
        } else if (val > max) {
            return max;
        } else {
            return val;
        }
    }

    attract(mover) {
        var force = this.position.clone().sub(mover.position);
        var distance = force.length();
        var d = this.constrain(distance, 10.0, 50.0);
        force.normalize();
        var strength = (this.G * this.mass * this.mass) / (d * d);
        force.multiplyScalar(strength);
        return force;
    }

    repel(mover) {
        var force = this.position.clone().sub(mover.position);
        var distance = force.length();
        var d = this.constrain(distance, 10.0, 50.0);
        force.normalize();
        var strength = ((this.G * this.mass * this.mass) / (d * d)) * -1;
        force.multiplyScalar(strength);
        return force;
    }

    suckBack(width, height) {
        if (this.position.x > width) {
            this.velocity.x *= 0.99;
            this.velocity.y *= 0.99;
        } else if (this.position.x < 0) {
            this.velocity.x *= 0.99;
            this.velocity.y *= 0.99;
        }

        if (this.position.y > height) {
            this.velocity.x *= 0.99;
            this.velocity.y *= 0.99;
        } else if (this.position.y < 0) {
            this.velocity.x *= 0.99;
            this.velocity.y *= 0.99;
        }
    }
}

class Line {
    constructor(vertex, index, waveType) {
        this.vertex = vertex;

        var offset = 4;
        this.waveType = waveType;
        this.index = index;
        this.r1 = Math.random();
        this.r2 = Math.random();
        this.r3 = Math.random();
        this.r4 = Math.random();

        this.x0 = index * offset + 0;
        this.y0 = index * offset + 1;
        this.x1 = index * offset + 2;
        this.y1 = index * offset + 3;

        this.bindedUpdate = this.update.bind(this);

        this.setup();
    }

    setup(x0, y0, x1, y1) {
        this.vertex[this.x0] = x0;
        this.vertex[this.y0] = y0;
        this.vertex[this.x1] = x1;
        this.vertex[this.y1] = y1;

        return this;
    }

    update(x0, y0, x1, y1) {
        this.vertex[this.x0] = x0;
        this.vertex[this.y0] = y0;
        this.vertex[this.x1] = x1;
        this.vertex[this.y1] = y1;
    }

    gD(key) {
        return this.vertex[this[key]];
    }
}

class PerspectiveCamera {
    constructor(gl) {
        this.gl = gl;
        this.pMatrix = mat4.create();
        this.mvMatrix = mat4.create();

        this.yAxis = [1.0, 0.0, 0.0];
        this.xAxis = [0.0, 1.0, 0.0];

        var state = (this.state = {});
        state.tiltX = 76;
        state.tiltY = 28.5;
        state.zoom = -2.5;
    }
    tick() {
        var state = this.state;
        state.tiltX += 0.21;
    }
    reCalc() {
        var state = this.state;
        var gl = this.gl;
        //set the perspective of the view
        mat4.perspective(
            this.pMatrix,
            45,
            gl.canvas.width / gl.canvas.height,
            0.1,
            1000.0
        );

        //model view matrix (mdoel translation)
        mat4.identity(this.mvMatrix);
        mat4.translate(this.mvMatrix, this.mvMatrix, [0.0, 0.0, state.zoom]);

        // mat4.rotate(this.mvMatrix, this.mvMatrix, this.degToRad(state.tiltY), this.yAxis);
        // mat4.rotate(this.mvMatrix, this.mvMatrix, this.degToRad(state.tiltX), this.xAxis);
    }

    degToRad(degree) {
        return (degree * Math.PI) / 180;
    }
}

class Unis {
    constructor({ gl, keys, program }) {
        this.gl = gl;
        this.loc = {};

        keys.forEach((item) => {
            this.loc[item] = gl.getUniformLocation(program, item);
        });
    }

    upload1f(key, val) {
        var gl = this.gl;
        gl.uniform1f(this.loc[key], val);
    }
    upload1i(key, val) {
        var gl = this.gl;
        gl.uniform1i(this.loc[key], val);
    }
    upload4m(key, val) {
        var gl = this.gl;
        gl.uniformMatrix4fv(this.loc[key], false, val);
    }
}

class ModeSwitcher {
    constructor(max) {
        this.maxModeIndex = max;
        this.start = 0;

        this.mode = this.start;
        this.repel = false;

        this.b = {
            tick: this.tickMode(),
        };

        setInterval(() => {
            if (this.down) {
                return;
            }
            this.goRepel();
        }, 7777);
    }

    tickMode() {
        this.mode++;
        this.mode = this.mode % this.maxModeIndex;
    }
    goDown() {
        this.down = true;
    }
    goUp() {
        this.down = false;
    }

    goRepel() {
        this.repel = true;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.repel = false;
            this.tickMode();
        }, 1386);
    }

    rightClick() {
        this.goRepel();
        this.tickMode();
    }
    twoFingers() {
        this.goRepel();
        this.tickMode();
    }
}

export const run = ({ el }) => {
    var gl = el.getContext("webgl", { alpha:true });

    var vertexSource = /* glsl */ `
    attribute vec2 a_position;
    varying vec2 v_position;

    uniform mat4 u_pMatrix;
    uniform mat4 u_mvMatrix;


    void main() {
        gl_Position = u_pMatrix * u_mvMatrix * vec4(a_position, 0, 1);
        gl_PointSize = 1.0;
        v_position = a_position;
    }
`;

    var fragmentSource = /* glsl */ `
    precision lowp float;

    varying vec2 v_position;
    void main() {
        gl_FragColor = vec4(
            v_position.x + 0.5,
            v_position.y *v_position.x + 0.5,
            v_position.y + 0.5,
            0.33
        );
    }
`;

    var vertexShader = util.prepShader(gl, vertexSource, gl.VERTEX_SHADER);
    var fragmentShader = util.prepShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
    var program = util.prepProgram(gl, vertexShader, fragmentShader);

    gl.useProgram(program);

    var camera = new PerspectiveCamera(gl);

    var uniforms = new Unis({
        gl: gl,
        program: program,
        keys: ["u_pMatrix", "u_mvMatrix"],
    });

    camera.reCalc();
    uniforms.upload4m("u_pMatrix", camera.pMatrix);
    uniforms.upload4m("u_mvMatrix", camera.mvMatrix);

    var buffer = gl.createBuffer();

    var lines = new Lines(888);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, lines.vertex, gl.DYNAMIC_DRAW);

    var positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var gravityCenter = new Mover2D(0, 0, 0.15);

    var modeSwitcher = new ModeSwitcher(5);

    var cX = 0,
        cY = 0,
        mX = 0,
        mY = 0;
    var dt = 0;
    var dtr = 0;
    var oldTime = new Date().getTime();

    var updateLine = (line, i) => {
        gravityCenter.position.x = cX * 2;
        gravityCenter.position.y = cY * 2;

        let mover = line.mover;

        // let pL = mover.position.lengthSq();
        var force;
        if (modeSwitcher.repel) {
            force = gravityCenter.repel(mover);
        } else {
            force = gravityCenter.attract(mover);
        }
        mover.applyForce(force);
        mover.update();
        mover.suckBack(1.0, 1.0);

        let pX = mover.position.x;
        let pY = mover.position.y;
        let vX = mover.velocity.x;
        let vY = mover.velocity.y;
        let pL = Math.abs(mover.position.length() - mover.velocity.length());

        var smoothAmount = 0.14;
        var smoothFactor = 1;
        var numOfLines = lines.count;

        var i1 = i / numOfLines;
        var i2 = (i - 1) / numOfLines;

        var theta1 = i1 * Math.PI * 4;
        var theta2 = i2 * Math.PI * 4;
        var dR = i1;
        var dR2 = i2;

        var cR = 0.6;

        var waveHeight = 0.2 + cX + cY;
        var numOfWaves = 5;
        var addon =
            smoothFactor * waveHeight * Math.sin((theta1 + dt) * numOfWaves);

        var xx = (cR + addon) * Math.cos(theta1 + dt);
        var yy = (cR + addon) * Math.sin(theta1 + dt);
        var x = cR * Math.cos(theta2 + dtr);
        var y = cR * Math.sin(theta2 + dtr);

        var petals = 3;

        var fr1 = Math.cos(theta1 * petals);
        var fr2 = Math.cos(theta2 * petals);

        var rX1 = fr1 * Math.cos(theta1 + dt);
        var rY1 = fr1 * Math.sin(theta1 + dt);

        var rX2 = fr2 * Math.cos(theta2 + dt);
        var rY2 = fr2 * Math.sin(theta2 + dt);

        if (modeSwitcher.repel) {
            if (modeSwitcher.mode === 0) {
                mover.position.x = x;
                mover.position.y = y;
                mover.velocity.x = 0.0875 * (line.r1 - line.r4);
                mover.velocity.y = 0.0875 * (line.r2 - line.r3);

                line.update(x, y, xx, yy);
            } else if (modeSwitcher.mode === 1) {
                mover.position.x = rX1;
                mover.position.y = rY1;
                mover.velocity.x = 0.5 * x;
                mover.velocity.y = 0.5 * y;

                line.update(rX1, rY1, rX2, rY2);
            } else if (modeSwitcher.mode === 2) {
                mover.position.x = xx;
                mover.position.y = yy;

                line.update(xx + mover.velocity.x, yy + mover.velocity.y, xx, yy);
            } else if (modeSwitcher.mode === 3) {
                mover.position.x = x;
                mover.position.y = y;
                mover.velocity.x = 0.5 * xx;
                mover.velocity.y = 0.5 * yy;

                line.update(x + yy, y + xx, x, y);
            } else if (modeSwitcher.mode === 4) {
                line.update(pX - vX * pL * 5, pY - vY * pL * 5, pX, pY);
            }
        } else {
            line.update(pX - vX * pL * 5, pY - vY * pL * 5, pX, pY);
        }
    };

    var initLine = (line, i) => {
        //     var x0 = line.gD('x0');
        //     var y0 = line.gD('y0');
        //     var x1 = line.gD('x1');
        //     var y1 = line.gD('y1');

        var smoothAmount = 0.14;
        var smoothFactor = 1;
        var numOfLines = lines.count;

        var angle = (i / numOfLines) * Math.PI * 4;
        var angle2 = ((i - 1) / numOfLines) * Math.PI * 4;
        var dR = i / numOfLines;
        var dR2 = (i - 1) / numOfLines;

        var cR = 0.7;

        var waveHeight = 0.2 + cX + cY;
        var numOfWaves = 5;
        var addon =
            smoothFactor * waveHeight * Math.sin((angle + dtr) * numOfWaves);

        var xx = (cR + addon) * Math.cos(angle + cX + 0.4);
        var yy = (cR + addon) * Math.sin(angle + cY + 0.4);
        var x = cR * Math.cos(angle2);
        var y = cR * Math.sin(angle2);

        line.update(x, y, xx, yy);

        line.mover = new Mover2D(xx + x, yy + y, 0.1 + 0.15 * Math.random());
    };

    lines.update(initLine);

    var rAF = (time) => {
        // requestAnimationFrame(rAF);
        dt = (oldTime - time) / 1000;
        dtr = (time - oldTime) / 1000;
        //oldTime = time;

        lines.update(updateLine);

        var gr = 0 / 255;

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(gr, gr, gr, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        camera.reCalc();
        uniforms.upload4m("u_pMatrix", camera.pMatrix);
        uniforms.upload4m("u_mvMatrix", camera.mvMatrix);

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(positionLocation);
        gl.bufferData(gl.ARRAY_BUFFER, lines.vertex, gl.DYNAMIC_DRAW);

        gl.drawArrays(gl.LINES, 0, lines.count);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    };
    rAF(0);

    // requestAnimationFrame(rAF);

    // window.document.addEventListener('mousemove', function(evt){
    //     mX = evt.pageX;
    //     mY = -1 * evt.pageY;
    //
    //     cX = (evt.pageX - window.innerWidth / 2) / window.innerWidth;
    //     cY = -1 * (evt.pageY - window.innerHeight / 2) / window.innerHeight;
    //
    // }, false);
    // window.document.addEventListener('mouseleave', function(evt){
    //     mX = 0;
    //     mY = 0;
    //
    //     cX = 0;
    //     cY = 0;
    // }, false);
    // window.document.addEventListener('mousedown', function(evt){
    //     evt.preventDefault();
    //
    //     modeSwitcher.goDown();
    // }, false);
    // window.document.addEventListener('mouseup', function(evt){
    //     evt.preventDefault();
    //
    //     modeSwitcher.goUp();
    // }, false);
    // window.oncontextmenu = function (){
    //     modeSwitcher.rightClick();
    //     return false;     // cancel default menu
    // };
    //
    //
    // window.document.addEventListener('touchstart', function(evt){
    //     evt.preventDefault();
    //     modeSwitcher.goDown();
    //     if (evt.targetTouches.length >= 2){
    //         modeSwitcher.twoFingers();
    //     }
    // }, false);
    // window.document.addEventListener('touchmove', function(evt){
    //     evt.preventDefault();
    //     mX = -1 * evt.targetTouches[0].clientX;
    //     mY = evt.targetTouches[0].clientY;
    //
    //     cX = -1 * (window.innerWidth / 2 - evt.targetTouches[0].clientX) / window.innerWidth;
    //     cY = (window.innerHeight / 2 - evt.targetTouches[0].clientY) / window.innerHeight;
    //
    // }, false);
    // window.document.addEventListener('touchend', function(evt){
    //     evt.preventDefault();
    //     mX = 0;
    //     cX = 0;
    //     mY = 0;
    //     cY = 0;
    //
    //     modeSwitcher.goUp();
    // }, false);

    function resizer() {
        var realToCSSPixels = 1;
        realToCSSPixels = 1;
        // Lookup the size the browser is displaying the canvas in CSS pixels
        // and compute a size needed to make our drawingbuffer match it in
        // device pixels.
        var displayWidth = Math.floor(gl.canvas.clientWidth * realToCSSPixels);
        var displayHeight = Math.floor(gl.canvas.clientHeight * realToCSSPixels);

        // Check if the canvas is not the same size.
        if (
            gl.canvas.width !== displayWidth ||
            gl.canvas.height !== displayHeight
        ) {
            // Make the canvas the same size
            gl.canvas.width = displayWidth;
            gl.canvas.height = displayHeight;
        }

        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
    }
    // window.addEventListener('resize', resizer, true);
    resizer();
};
