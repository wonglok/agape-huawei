// 顶点着色器程序
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' + // attribute variable
    'attribute vec4 a_Color;\n' +
    'varying vec4 v_Color;\n' +
    'void main() {\n' +
    '  gl_Position = a_Position;\n' + // Set the vertex coordinates of the point
    '  v_Color = a_Color;\n' +
    '}\n'

// 片元着色器程序
var FSHADER_SOURCE =
    'precision highp float;\n' + 'varying vec4 v_Color;\n' + 'void main() {\n' + '  gl_FragColor = v_Color;\n' + '}\n'

function initVertexBuffers(gl) {
    // 顶点坐标和颜色
    var verticesColors = new Float32Array([
        0.0, -0.5, 1.0, 0.0, 0.0, -0.5, -0.8, 0.0, 1.0, 0.0, 0.5, -0.8, 0.0, 0.0, 1.0,
    ])

    var n = 3 // 点的个数
    var FSIZE = verticesColors.BYTES_PER_ELEMENT //数组中每个元素的字节数

    console.log(FSIZE)

    // 创建缓冲区对象
    var vertexBuffer = gl.createBuffer()
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object')
        return -1
    }

    // 将缓冲区对象绑定到目标
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    // 向缓冲区对象写入数据
    gl.bufferData(gl.ARRAY_BUFFER, verticesColors.buffer, gl.STATIC_DRAW)

    // 获取着色器中attribute变量a_Position的地址
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
    if (a_Position < 0) {
        console.log('Failed to get the storage location of a_Position')
        return -1
    }
    // 将缓冲区对象分配给a_Position变量
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 5 * FSIZE, 0)

    // 连接a_Position变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(a_Position)

    // 获取着色器中attribute变量a_Color的地址
    var a_Color = gl.getAttribLocation(gl.program, 'a_Color')
    if (a_Color < 0) {
        console.log('Failed to get the storage location of a_Color')
        return -1
    }
    // 将缓冲区对象分配给a_Color变量
    gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2)

    // 连接a_Color变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(a_Color)

    // 解除绑定
    gl.bindBuffer(gl.ARRAY_BUFFER, null)

    return n
}

/**
 * 创建并使能一个program对象
 * @param gl 表示 WebGL上下文对
 * @param vshader 表示顶点着色器
 * @param fshader 表示片段着色器
 * @return 如果WebGLProgram对象被创建并成功作为当前对象，则返回true；否则返回false
 */
function initShaders(gl, vshader, fshader) {
    var program = createProgram(gl, vshader, fshader)
    console.log('======createProgram program: ' + program)
    if (!program) {
        console.log('Failed to create program')
        return false
    }
    gl.useProgram(program)
    gl.program = program
    return true
}
/**
 * 创建一个linked program对象
 * @param gl 表示 WebGL上下文对象
 * @param vshader 表示顶点着色器
 * @param fshader 表示片段着色器
 * @return 如果创建program成功，则返回创建的program；否则返回null
 */
function createProgram(gl, vshader, fshader) {
    console.log('======createProgram start======')
    // 创建shader对象
    var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader)
    console.log('======vertexShader: ' + vertexShader)
    var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader)
    if (!vertexShader || !fragmentShader) {
        return null
    }
    // 创建program对象
    var program = gl.createProgram()
    console.log('======createProgram program: ' + program)
    if (!program) {
        return null
    }
    // 将着色器附加到对象
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    // 连接程序对象
    gl.linkProgram(program)
    // 检查连接对象的结果
    var linked = gl.getProgramParameter(program, 0x8b82)
    console.log('======getProgramParameter linked: ' + linked)
    if (!linked) {
        var error = gl.getProgramInfoLog(program)
        console.log('Failed to link the program: ' + error)
        gl.deleteProgram(program)
        gl.deleteShader(fragmentShader)
        gl.deleteShader(vertexShader)
        return null
    }
    return program
}
/**
 * 创建一个shader对象
 * @param gl 表示 WebGL上下文对象
 * @param type 表示shader类型
 * @param source 表示shader的源码
 * @return 如果操作成功，返回创建的着色器对象；否则返回false
 */
function loadShader(gl, type, source) {
    console.log('======into loadShader====')
    // 创建shader对象
    var shader = gl.createShader(type)
    if (shader == null) {
        console.log('Failed to create the shader.')
        return null
    }

    // 设置shader program
    gl.shaderSource(shader, source)

    // 编译shader
    gl.compileShader(shader)

    // 检查shader编译结果
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
    if (!compiled) {
        var error = gl.getShaderInfoLog(shader)
        console.log('Failed to compile the shader: ' + error)
        gl.deleteShader(shader)
        return null
    }
    return shader
}

export function run({ el }) {
    // 获取webgl上下文
    var gl = el.getContext('webgl')

    if (!gl) {
        console.log('Failed to get the rendering context for WebGL')
        return
    }

    // 初始化着色器
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to initialize shaders.')
        return
    }

    // 设置顶点位置
    var n = initVertexBuffers(gl)
    if (n < 0) {
        console.log('Failed to set the positions of the vertices')
        return
    }

    // 指定清空<canvas>的颜色
    gl.clearColor(0.0, 0.0, 0.0, 1.0)

    // 清空<canvas>
    gl.clear(gl.COLOR_BUFFER_BIT)

    // 绘制三角形
    gl.drawArrays(gl.TRIANGLES, 0, n)

    // 清buffer
    gl.flush()
}
